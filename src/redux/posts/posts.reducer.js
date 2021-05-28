import PostsTypes from './PostsTypes';

const INITIAL_STATE = {
  posts: [],
  isPostsLoading: false,
};

const PostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsTypes.GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case PostsTypes.IS_LOADING: {
      return {
        ...state,
        isPostsLoading: !state.isPostsLoading,
      };
    }

    default: {
      return state;
    }
  }
};

export default PostsReducer;
