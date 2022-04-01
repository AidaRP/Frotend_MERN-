import { GET_COMMENTS ,COMMENT_DETAIL,DELETE_COMMENT, MODIFY_COMMENT, RESET } from "../types";

const initialState = {
  comment: null,
  comments: [],
  message: "",
};

const dataCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_COMMENT:
      return {
        ...state,
        comment: action.payload.comment,
        message: action.payload.message
      };
      case RESET:
        return {
          ...state,
          message: "",
      };
    case COMMENT_DETAIL:
      return {
        ...state,
        comment: action.payload

      };
      case GET_COMMENTS :
        return {
           ...state,
           comments: action.payload
      };
      case DELETE_COMMENT:
        return {
           ...state,
           comments: state.comments.filter(comment => comment._id !== +action.payload._id)
         };
    default:
      return state;
  }
};

export default dataCommentReducer;