import store from "../store";
import axios from "axios";
import { GET_COMMENTS ,COMMENT_DETAIL,DELETE_COMMENT, MODIFY_COMMENT } from "../types";
import { API_URL } from "../../utility";
export const getComments = async () => {
    try {
      const res = await axios.get(API_URL + "/comments/getAll");
      store.dispatch({
        type: GET_COMMENTS,
        payload: res.data,
      });
     
    } catch (error) {
      console.error(error);
    }
};
export const getCommentById = async (_id) => {
  try {
    const res = await axios.get(API_URL + "/comments/" +_id);
    store.dispatch({
      type: COMMENT_DETAIL,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteCommentById = async (id) => {
  try {
      const credentials = JSON.parse(
          localStorage.getItem("redux_localstorage_simple_credentials")
      );
      let config = {
          headers: { Authorization: credentials.token },
      };
    const res = await axios.delete(API_URL + `/comments/deleteId/${id}`, config);
    store.dispatch({ type: DELETE_POST, payload: res.data })
      return res
  } catch (error) {
      console.log(error);
  }
};

export const createComment = async (dataComment) => {
  try {
    let res = await axios.post(API_URL + "/comments/create",dataComment);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateComment = async (dataComment) => {
  try {
    let res = await axios.put(API_URL + `/comments/edit/${id}`,dataComment);
    return res;
  } catch (error) {
    console.log(error);
  }
};