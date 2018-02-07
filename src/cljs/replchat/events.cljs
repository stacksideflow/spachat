(ns replchat.events
  (:require [ajax.core :as ajax]
            [cljs.spec.alpha :as s]
            [day8.re-frame.http-fx]
            replchat.spec
            [re-frame.core :as rf :refer [trim-v]]))

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
 (fn
   [{:keys [db]} _]
   (let [{:keys [signup-password] :as signup-args} db]
     (if (s/valid? :replchat.spec/password signup-password)
       {:db db :dispatch [:signup-submit signup-args]}
       {:db db :dispatch [:snackbar-home "Password must include 6 chars or more"]}))))

(rf/reg-event-fx
 :signup-submit
 (fn
   [{:keys [db]} _]
   (let [{:keys [signup-user signup-password]} db]
     {:db db
      :http-xhrio {:method :post
                   :uri "/API/signupGo"
                   :params {:username signup-user
                            :password signup-password}
                   :format request-format
                   :response-format response-format
                   :on-success [:signup-submit-success]
                   :on-failure [:signup-submit-failure]}})))

(rf/reg-event-db
 :signup-submit-success
 trim-v
 (fn
   [db [{:keys [okCookie]}]]
   (assoc db
          :lastchat 0
          :page :chat
          :spaCookie okCookie)))

(rf/reg-event-fx
 :signup-submit-failure
 trim-v
 (fn
   [{:keys [db]} [{:keys [response]}]]
   (let [{:keys [errorText] :or {errorText "Unknown error"}} response]
     {:db (assoc db :noserver true :signup-password "")
      :dispatch [:snackbar-home errorText]})))

(rf/reg-fx
 :get-chats-visuals!
 (fn []
   (when-let [chat-container (.getElementById js/document "chats-container")]
     (js/setTimeout #(set! (.-scrollTop chat-container)
                           (.-scrollHeight chat-container)) 50))))

(rf/reg-event-fx
 :get-chats
 (fn
   [{:keys [db]} _]
   {:db db
    :get-chats-visuals! nil
    :http-xhrio {:method :post
                 :uri "/API/getChat"
                 :format request-format
                 :response-format response-format
                 :on-success [:get-chats-process]
                 :on-failure [:get-chats-process]}}))

(rf/reg-event-db
 :get-chats-process
 trim-v
 (fn
   [db [{:keys [okChats]}]]
   (assoc db
          :lastchat (:id (last okChats))
          :chats okChats)))

(rf/reg-event-fx
 :send-message-go
 (fn
   [{:keys [db]} _]
   (let [{:keys [send-message signup-user spaCookie]} db]
     {:db (assoc db :send-message "")
      :http-xhrio {:method :post
                   :uri "/API/putChat"
                   :params {:message send-message
                            :username signup-user
                            :cookie spaCookie}
                   :format request-format
                   :response-format response-format
                   :on-success [:api-send-message-success]
                   :on-failure [:api-send-message-failure]}})))

(rf/reg-event-fx
 :api-send-message-success
 trim-v
 (fn
   [{:keys [db]} _]
   {:db db
    :dispatch-n (list [:snackbar-home "Message sent"] [:get-chats])}))

(rf/reg-event-db
 :api-send-message-failure
 (fn
   [db _]
   (assoc db :noserver true)))

(rf/reg-event-fx
 :pinging-chat-user
 (fn [{:keys [db]} _]
   (let [{:keys [spaCookie lastchat]} db]
     {:db db
      :http-xhrio {:method :post
                   :uri "/API/ping"
                   :params {:lastchat lastchat
                            :cookie spaCookie}
                   :format request-format
                   :response-format response-format
                   :on-success [:api-ping-chat-user-process]
                   :on-failure [:pingingGotResponse]}})))

(rf/reg-event-fx
 :api-ping-chat-user-process
 trim-v
 (fn
   [{:keys [db]} [{:keys [updateneeded onlineUsersNow]}]]
   {:db (assoc db :onlineUsersNow onlineUsersNow)
    :dispatch-n (list (when updateneeded [:get-chats]))}))