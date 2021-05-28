import { takeEvery, put } from '@redux-saga/core/effects';
import axios from 'axios';
import { fetchCommentsSuccess } from './comments.actions';
import CommentsTypes from './comments.types';

export function* fetchCommentsStartsAsync(action) {
  try {
    yield console.log('a: ', action.payload);

    const response = yield axios.get(
      `https://gorest.co.in/public-api/comments?post_id=${action.payload}`
    );

    console.log('comments: ', response.data.data);
    yield put(fetchCommentsSuccess(response.data.data));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* FetchCommentsStarts() {
  yield takeEvery(
    CommentsTypes.FETCH_COMMENTS_STATRS,
    fetchCommentsStartsAsync
  );
}
