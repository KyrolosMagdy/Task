import PostsTypes from './PostsTypes';

export const getPostsStarts = (userId) => ({
  type: PostsTypes.GET_POSTS_STARTS,
  payload: userId,
});

export const getPostsSuccess = (posts) => ({
  type: PostsTypes.GET_POSTS_SUCCESS,
  payload: posts,
});

export const isLoading = () => ({
  type: PostsTypes.IS_LOADING,
});
