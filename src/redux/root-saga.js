import { all, call } from 'redux-saga/effects';

import {
  fetchUsersStart,
  loadMoreUsersStarts,
  SearchForSpecificUserSaga,
} from './users/users.saga';
import { getPostsStarts } from './posts/posts.saga';
import { FetchCommentsStarts } from './comments/comments.saga';

export default function* rootSaga() {
  yield all([
    call(fetchUsersStart),
    call(loadMoreUsersStarts),
    call(getPostsStarts),
    call(FetchCommentsStarts),
    call(SearchForSpecificUserSaga),
  ]);
}
