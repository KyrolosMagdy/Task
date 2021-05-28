import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { getPostsSuccess, isLoading } from './posts.actions';
import PostsTypes from './PostsTypes';

export function* getPostsAsync(action) {
  yield put(isLoading());
  try {
    console.log('checking pyaload: ', action.payload);
    const response = yield axios.get(
      `https://gorest.co.in/public-api/posts?user_id=${action.payload}`
    );

    yield put(getPostsSuccess(response.data.data));
    console.log('resss: ', response.data.data);
  } catch (err) {
    console.log('err from here: ', err);
  }
  yield put(isLoading());
}

export function* getPostsStarts() {
  yield takeEvery(PostsTypes.GET_POSTS_STARTS, getPostsAsync);
}
