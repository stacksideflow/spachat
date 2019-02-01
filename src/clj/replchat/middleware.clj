(ns replchat.middleware
  (:require [replchat.env :refer [defaults]]
            [cheshire.generate :as cheshire]
            [cognitect.transit :as transit]
            [clojure.tools.logging :as log]
            [replchat.layout :refer [error-page]]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
            [ring.middleware.ssl :refer [wrap-hsts wrap-ssl-redirect]]
            [ring.middleware.webjars :refer [wrap-webjars]]
            [muuntaja.core :as muuntaja]
            [muuntaja.format.json :refer [json-format]]
            [muuntaja.format.transit :as transit-format]
            [muuntaja.middleware :refer [wrap-format wrap-params]]
            [replchat.config :refer [env]]
            [ring-ttl-session.core :refer [ttl-memory-store]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]])
  (:import
   [org.joda.time ReadableInstant]))

(defn wrap-internal-error [handler]
  (fn [req]
    (try
      (handler req)
      (catch Throwable t
        (log/error t (.getMessage t))
        (error-page
         {:status 500
          :title "Server Error"
          :message "Whoa"})))))

(defn wrap-csrf [handler]
  (wrap-anti-forgery
   handler
   {:error-response
    (error-page
     {:status 403
      :title "Invalid anti-forgery token where it's due"})}))

(def joda-time-writer
  (transit/write-handler
   (constantly "m")
   (fn [v] (-> ^ReadableInstant v .getMillis))
   (fn [v] (-> ^ReadableInstant v .getMillis .toString))))

(cheshire/add-encoder
 org.joda.time.DateTime
 (fn [c jsonGenerator]
   (.writeString jsonGenerator (-> ^ReadableInstant c .getMillis .toString))))

(def restful-format-options
  (update
   muuntaja/default-options
   :formats
   merge
   {"application/json"
    json-format

    "application/transit+json"
    {:decoder [(partial transit-format/make-transit-decoder :json)]
     :encoder [#(transit-format/make-transit-encoder
                 :json
                 (merge
                  %
                  {:handlers {org.joda.time.DateTime joda-time-writer}}))]}}))

(defn wrap-formats [handler]
  (let [wrapped (-> handler wrap-params (wrap-format restful-format-options))]
    (fn [request]
      ;; disable wrap-formats for websockets
      ;; since they're not compatible with this middleware
      ((if (:websocket? request) handler wrapped) request))))

(defn wrap-base [handler]
  (-> ((:middleware defaults) handler)
      wrap-webjars
      (wrap-defaults
       (-> site-defaults
           (assoc-in [:security :anti-forgery] false)
           (assoc-in  [:session :store] (ttl-memory-store (* 60 30)))))
      wrap-hsts
      wrap-internal-error))
