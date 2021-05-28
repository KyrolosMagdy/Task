import axios from 'axios';
import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import UsersTypes from './types';
import {
  SetTotalUsers,
  SetUsersSuccess,
  SetIsLoading,
  LoadMoreUsersSuccess,
} from './users.actions';

export function* fetchUsersAsync() {
  try {
    yield console.log('Im here');
    yield put(SetIsLoading());
    const response = yield axios.get('https://gorest.co.in/public-api/users');
    yield put(SetUsersSuccess(response.data.data));
    yield put(SetTotalUsers(response.data.meta.pagination.total));
    yield put(SetIsLoading());
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* fetchUsersStart() {
  yield takeEvery(UsersTypes.FETCH_USERS_START, fetchUsersAsync);
}

export function* loadMoreUsersAsync(action) {
  yield put(SetIsLoading());
  try {
    const pageNumber = action.payload;
    const response = yield axios.get(
      `https://gorest.co.in/public-api/users?page=${pageNumber}`
    );
    yield put(LoadMoreUsersSuccess(response.data.data));
  } catch (err) {
    console.log('err: ', err);
  }

  yield put(SetIsLoading());
}

export function* loadMoreUsersStarts() {
  yield takeEvery(UsersTypes.LOAD_MORE_USERS, loadMoreUsersAsync);
}

export function* searchspecificUserAsync(action) {
  yield put(SetIsLoading());

  try {
    const response = yield axios.get(
      `https://gorest.co.in/public-api/users?name=${action.payload}`
    );
    yield put(SetUsersSuccess(response.data.data));
    yield put(SetTotalUsers(response.data.meta.pagination.total));
  } catch (err) {
    console.log('err: ', err);
  }

  yield put(SetIsLoading());
}

export function* SearchForSpecificUserSaga() {
  yield takeLatest(
    UsersTypes.SEARCH_FOR_SPECIFIC_USER,
    searchspecificUserAsync
  );
}
