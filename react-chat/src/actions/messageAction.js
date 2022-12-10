import {
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILURE,
  ADD_NEW_MESSAGE,
} from "../constants/reducer";

const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages,
});

const getMessagesFailure = (error) => ({
  type: GET_MESSAGES_FAILURE,
  payload: {
    error, // error: error
  },
});

const addNewMessage = (message) => ({
  type: ADD_NEW_MESSAGE,
  payload: message,
});

export const getMessagesAction = (chat_id) => {
  return (dispatch, getState) => {
    console.log("state: ", getState());
    if (chat_id === -1) {
      const pollItems = () => {
        fetch(`https://tt-front.vercel.app/messages`)
          .then((resp) => resp.json())
          .then((data) => dispatch(getMessagesSuccess(data.reverse())));
      };
      setInterval(() => pollItems(), 3000);
      return;
    }

    fetch(`http://localhost:9000/api/v1/chats/messages_in_chat/${chat_id}/`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getMessagesSuccess(data));
      })
      .catch((err) => {
        dispatch(getMessagesFailure(err.message));
      });
  };
};

export const newMessageAction = (message) => {
  return (dispatch, getState) => {
    if (message.chat_id === -1) {
      fetch(`https://tt-front.vercel.app/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      return;
    }
    fetch(
      `http://localhost:9000/api/v1/chats/messages_in_chat/${message.chat_id}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      }
    );
  };
};

export const renderNewMessageAction = (message) => {
  return (dispatch, getState) => {
    dispatch(addNewMessage(message));
  };
};
