import UsersTypes from './types';

export const getUsersStarts = () => {
  return {
    type: UsersTypes.FETCH_USERS_START,
  };
};

export const SetUsersSuccess = (users) => ({
  type: UsersTypes.FETCH_USERS_SUCCESS,
  payload: users,
});

export const SetTotalUsers = (totalUsers) => ({
  type: UsersTypes.SET_TOTAL_USERS,
  payload: totalUsers,
});

export const SetIsLoading = () => ({
  type: UsersTypes.SET_IS_LOADING,
});

export const SetRowsPerPage = (rowsPerPage) => ({
  type: UsersTypes.SET_ROWS_PERPAGE,
  payload: rowsPerPage,
});

export const LoadMoreUsers = (pageNumber) => ({
  type: UsersTypes.LOAD_MORE_USERS,
  payload: pageNumber,
});

export const LoadMoreUsersSuccess = (newUsers) => ({
  type: UsersTypes.LOAD_MORE_USERS_SUCCESS,
  payload: newUsers,
});

export const SearchForSpecificUser = (userName) => ({
  type: UsersTypes.SEARCH_FOR_SPECIFIC_USER,
  payload: userName,
});
