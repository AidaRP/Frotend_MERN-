import store from "../store";
import axios from "axios";
import {
  GET_POSTS,
  POST_DETAIL,
  DELETE_POST,
  MODIFY_POST,
} from "../types";
import { API_URL } from "../../utility";

export const getPosts = async () => {
  try {
    const res = await axios.get(API_URL + "/posts/getAll");
    store.dispatch({
      type: GET_POSTS,
      payload: res.data.reverse(),
    });
  } catch (error) {
    console.error(error);
  }
};
export const getPostById = async (_id) => {
  try {
    const res = await axios.get(API_URL + `/posts/getPost/${_id}`);	
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
    const res = await axios.delete(API_URL + `/posts/deleteId/${id}`, config);
    store.dispatch({ type: DELETE_POST, payload: res.data });
    getPosts();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (dataPost) => {
  try {
    const credentials = JSON.parse(
      localStorage.getItem("redux_localstorage_simple_credentials")
    );
    let config = {
      headers: { Authorization: credentials.token },
    };
    let res = await axios.post(API_URL + "/posts/create", dataPost, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const like = async (_id) => {
  const credentials = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_credentials")
  );
  let config = {
    headers: { Authorization: credentials.token },
  };
  const res = await axios.post(API_URL + "/posts/addLike/" + _id, {}, config, {
    headers: {
      authorization: credentials?.token,
    },
  });
  getPosts()
  return res.data;
};

export const dislike = async (_id) => {
  const credentials = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_credentials")
  );
  let config = {
    headers: { Authorization: credentials.token },
  };
  const res = await axios.post(API_URL + "/posts/unlike/" + _id, {}, config, {
    headers: {
      authorization: credentials?.token,
    },
  });
  getPosts()
  return res.data;
};

export const updatePostById = async (id) => {
  try {
    const credentials = JSON.parse(
      localStorage.getItem("redux_localstorage_simple_credentials")
    );
    let config = {
      headers: { Authorization: credentials.token },
    };
    const res = await axios.put(API_URL + `/posts/edit/${id}`, config);
    store.dispatch({ type: MODIFY_POST, payload: res.data });
    getPostById();
    return res;
  } catch (error) {
    console.log(error);
  }
};
//revisar ruta
// export const updatePost = async (dataPost) => {
//   try {
//     let res = await axios.put(API_URL + "/posts/edit",dataPost);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };
