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
