import store from "../store";
import axios from "axios";
import { GET_POSTS ,POST_DETAIL,DELETE_POST, MODIFY_POST } from "../types";
const API_URL = process.env.NODE_ENV === 'production' ? 'https://backend-films2022.herokuapp.com': "http://localhost:5500";

export const getPosts = async () => {
    try {
      const res = await axios.get(API_URL + "/posts");
      store.dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
};
export const getPostById = async (_id) => {
  try {
    const res = await axios.get(API_URL + "/posts/" +_id);
    store.dispatch({
      type: POST_DETAIL,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deletePostById = async (id) => {
  try {
      const credentials = JSON.parse(
          localStorage.getItem("redux_localstorage_simple_credentials")
      );
      let config = {
          headers: { Authorization: credentials.token },
      };
    const res = await axios.delete(API_URL + `/posts/${_id}`, config);
    store.dispatch({ type: DELETE_POST, payload: res.data })
      return res
  } catch (error) {
      console.log(error);
  }
};

export const createPost = async (dataPost) => {
  try {
    let res = await axios.post(API_URL + "/posts/create",dataPost);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (dataPost) => {
  try {
    let res = await axios.put(API_URL + "/posts/edit",dataPost);
    return res;
  } catch (error) {
    console.log(error);
  }
};