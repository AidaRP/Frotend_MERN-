import { GET_POSTS ,POST_DETAIL,DELETE_POST, MODIFY_POST, RESET } from "../types";

const initialState = {
  post: null,
  posts: [],
  message: "",
};

const dataPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_POST:
      return {
        ...state,
        post: action.payload.post,
        message: action.payload.message
      };
      case RESET:
        return {
          ...state,
          message: "",
      };
    case POST_DETAIL:
      return {
        ...state,
        post: action.payload.post

      };
      case GET_POSTS :
        return {
           ...state,
           posts: action.payload
      };
      case DELETE_POST:
        return {
           ...state,
           posts: state.posts.filter(post => post._id !== +action.payload._id)
      };
    default:
      return state;
  }
};

export default dataPostReducer;