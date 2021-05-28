import CommentsTypes from './comments.types';

const INITIAL_STATE = {
  comments: [],
};

const CommentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommentsTypes.FETCH_COMMENTS_SUCCESS: {
      return {
        ...state,
        comments: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default CommentsReducer;
