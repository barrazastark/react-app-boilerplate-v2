import {
  START_LOGIN,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  SUCCESS_LOGOUT,
  SUCCESS_GET_SESSIONS,
  FAIL_GET_SESSIONS,
  START_LOGOUT,
} from "__redux__/types";

const initialState = {
  loading: false,
  loggedInUser: null,
  error: null,
  fetchingSession: true,
  closingSession: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case START_LOGIN:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        loading: false,
        loggedInUser: payload.user,
      };
    case FAIL_LOGIN:
      return {
        ...state,
        loading: false,
        error: payload.errorMsg,
      };
    case START_LOGOUT:
      return {
        ...state,
        closingSession: true,
      };
    case SUCCESS_LOGOUT: {
      return {
        ...initialState,
        fetchingSession: false,
      };
    }
    case SUCCESS_GET_SESSIONS: {
      return {
        ...state,
        fetchingSession: false,
        error: null,
        loggedInUser: payload.user,
      };
    }
    case FAIL_GET_SESSIONS:
      return { ...state, fetchingSession: false, loggedInUser: null };
    default:
      return state;
  }
};
