(ns replchat.events
  (:require [ajax.core :as ajax]
            [cljs.spec.alpha :as s]
            [day8.re-frame.http-fx]
            [re-frame.core :as rf :refer [trim-v]]
            [replchat.spec]))

(def request-format (ajax/json-request-format))

(def response-format (ajax/json-response-format {:keywords? true}))

(rf/reg-event-db
 :navigate
 trim-v
 (fn [db [page]]
   (assoc db :page page)))

(rf/reg-event-db
 :reset-sign-in-error
 (fn [db _]
   (dissoc db :sign-in-error)))

(rf/reg-event-db
 :send-message
 trim-v
 (fn [db [message]]
   (assoc db :send-message message)))

(rf/reg-event-db
 :signup-user
 trim-v
 (fn [db [user]]
   (assoc db :signup-user user)))

(rf/reg-event-db
 :signup-password
 trim-v
 (fn [db [password]]
   (assoc db :signup-password password)))

(rf/reg-event-db
 :signup-user
 trim-v
 (fn [db [user]]
   (assoc db :signup-user user)))

(rf/reg-event-db
 :snackbar-home
 trim-v
 (fn [db [text]]
   (assoc db :snackbar-home text)))

(rf/reg-event-fx
 :signup-check-pass
 (fn [{:keys [db]} _]
   (let [{:keys [signup-password] :as signup-args} db]
     (if (s/valid? :replchat.spec/password signup-password)
       {:db db :dispatch [:signup-submit signup-args]}
       {:db db :dispatch
        [:snackbar-home "Password must include 6 chars or more"]}))))

(rf/reg-event-fx
 :signup-submit
 (fn [{:keys [db]} _]
   (let [{:keys [signup-user signup-password]} db]
     {:db db
      :http-xhrio {:method :post
                   :uri "/api/auth"
                   :params {:username signup-user
                            :password signup-password}
                   :format request-format
                   :response-format response-format
                   :on-success [:signup-submit-success]
                   :on-failure [:signup-submit-failure]}})))

(rf/reg-event-fx
 :signup-submit-success
 trim-v
 (fn [{:keys [db]} [{:keys [ok-cookie]}]]
   {:db (assoc db
               :lastchat 0
               :page :chat
               :supplied-cookie ok-cookie)
    :dispatch [:poll-chat-user]
    :poll-with-interval  {:action :start
                          :id :chat-page
                          :frequency 5000}}))

(rf/reg-event-fx
 :signup-submit-failure
 trim-v
 (fn [{:keys [db]} [{:keys [response]}]]
   (let [{:keys [error-text] :or {error-text "Unknown error"}} response]
     {:db (assoc db :noserver true :signup-password "")
      :dispatch [:snackbar-home error-text]})))

(rf/reg-fx
 :poll-with-interval
 (let [live-intervals (atom {})]
   (fn [{:keys [action id frequency]}]
     (if (= action :start)
       (swap! live-intervals
              assoc
              id
              (js/setInterval #(rf/dispatch [:poll-chat-user])
                              frequency))
       (do (js/clearInterval (get @live-intervals id))
           (swap! live-intervals dissoc id))))))

(rf/reg-fx
 :get-chats-visuals!
 (fn []
   (when-let [chat-container (.getElementById js/document "chats-container")]
     (js/setTimeout #(set! (.-scrollTop chat-container)
                           (.-scrollHeight chat-container)) 100))))

(rf/reg-event-fx
 :get-chats
 (fn [{:keys [db]} _]
   {:db db
    :get-chats-visuals! nil
    :http-xhrio {:method :post
                 :uri "/api/get-chat"
                 :format request-format
                 :response-format response-format
                 :on-success [:get-chats-process]
                 :on-failure [:get-chats-process]}}))

(rf/reg-event-db
 :get-chats-process
 trim-v
 (fn [db [{:keys [ok-chats]}]]
   (assoc db
          :lastchat (:id (last ok-chats))
          :chats ok-chats)))

(rf/reg-event-fx
 :send-message-go
 (fn [{:keys [db]} _]
   (let [{:keys [send-message signup-user supplied-cookie]} db]
     {:db (assoc db :send-message "")
      :http-xhrio {:method :post
                   :uri "/api/put-chat"
                   :params {:message send-message
                            :username signup-user
                            :cookie supplied-cookie}
                   :format request-format
                   :response-format response-format
                   :on-success [:api-send-message-success]
                   :on-failure [:api-send-message-failure]}})))

(rf/reg-event-fx
 :api-send-message-success
 trim-v
 (fn [{:keys [db]} _]
   {:db db
    :dispatch-n (list [:snackbar-home "Message sent"] [:get-chats])}))

(rf/reg-event-db
 :api-send-message-failure
 (fn [db _]
   (assoc db :noserver true)))

(rf/reg-event-fx
 :poll-chat-user
 (fn [{:keys [db]} _]
   (let [{:keys [supplied-cookie lastchat]} db]
     {:db db
      :http-xhrio {:method :post
                   :uri "/api/poll"
                   :params {:lastchat lastchat
                            :cookie supplied-cookie}
                   :format request-format
                   :response-format response-format
                   :on-success [:poll-chat-user-success]
                   :on-failure [:poll-chat-user-failure]}})))

(rf/reg-event-fx
 :poll-chat-user-success
 trim-v
 (fn [{:keys [db]} [{:keys [update-due? users-online]}]]
   {:db (assoc db :users-online users-online)
    :dispatch-n (list (when update-due? [:get-chats]))}))

(rf/reg-event-db
 :poll-chat-user-failure
 (fn [db _]
   (assoc db :noserver true)))
