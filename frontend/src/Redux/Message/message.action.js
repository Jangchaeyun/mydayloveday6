import { api } from "../../config/api";
import * as actionType from "./message.actionType";

export const createMessage = (message) => async (dispatch) => {
  dispatch({ type: actionType.CREATE_MESSAGE_REQUEST });
  try {
    const { data } = await api.post(`/api/message`, message);
    console.log("create message ", data);
    dispatch({ type: actionType.CREATE_MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    console.log("CATCH ERROR ", error);
    dispatch({ tyoe: actionType.CREATE_MESSAGE_FAILURE, payload: error });
  }
};

export const createChat = (chat) => async (dispatch) => {
  dispatch({ type: actionType.CREATE_CHAT_FAILURE });
  try {
    const { data } = await api.post(`/api/chats`, chat);
    console.log("create message ", data);
    dispatch({ type: actionType.CREATE_CHAT_SUCCESS, payload: data });
  } catch (error) {
    console.log("CATCH ERROR ", error);
    dispatch({ tyoe: actionType.CREATE_CHAT_FAILURE, payload: error });
  }
};

export const getAllChats = (message) => async (dispatch) => {
  dispatch({ type: actionType.GET_ALL_CHATS_REQUEST });
  try {
    const { data } = await api.post(`/api/chats/user`, message);
    console.log("get all chats ", data);
    dispatch({ type: actionType.GET_ALL_CHATS_SUCCESS, payload: data });
  } catch (error) {
    console.log("CATCH ERROR ", error);
    dispatch({ tyoe: actionType.GET_ALL_CHATS_FAILURE, payload: error });
  }
};
