import CommentsTypes from './comments.types';

export const fetchCommsntsStarts = (postId) => ({
  type: CommentsTypes.FETCH_COMMENTS_STATRS,
  payload: postId,
});

export const fetchCommentsSuccess = (comments) => ({
  type: CommentsTypes.FETCH_COMMENTS_SUCCESS,
  payload: comments,
});
