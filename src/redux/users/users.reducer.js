import UsersTypes from './types';

const INITIAL_STATE = {
  users: [],
  totalUsers: 0,
  isLoading: false,
  rowsPerPage: 5,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersTypes.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case UsersTypes.SET_TOTAL_USERS: {
      return {
        ...state,
        totalUsers: action.payload,
      };
    }

    case UsersTypes.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }

    case UsersTypes.SET_ROWS_PERPAGE: {
      return {
        ...state,
        rowsPerPage: action.payload,
      };
    }

    case UsersTypes.LOAD_MORE_USERS_SUCCESS: {
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    }

    default: {
      return state;
    }
  }
};

export default UserReducer;
