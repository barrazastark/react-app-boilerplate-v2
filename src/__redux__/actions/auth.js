import API from "Api";
import {
  START_LOGIN,
  FAIL_LOGIN,
  SUCCESS_LOGIN,
  SUCCESS_LOGOUT,
  SHOW_ALERT,
  SUCCESS_GET_SESSIONS,
  FAIL_GET_SESSIONS,
  START_LOGOUT,
} from "__redux__/types";

export const login = (user) => async (dispatch) => {
  dispatch({ type: START_LOGIN });

  try {
    const response = await API.post("/sessions", { user });
    localStorage.setItem("token", response.data.token);
    dispatch({ type: SUCCESS_LOGIN, payload: response.data });
  } catch (error) {
    dispatch({ type: FAIL_LOGIN, payload: { errorMsg: "ERROR_LOGIN_500" } });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: START_LOGOUT });
  try {
    await API.delete("/sessions");
    localStorage.removeItem("token");
    dispatch({ type: SUCCESS_LOGOUT });
  } catch (error) {
    dispatch({
      type: SHOW_ALERT,
      payload: { type: "ERROR", messageKey: "ERROR_LOGOUT_500" },
    });
  }
};

export const getSessions = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const response = await API.get("/sessions", { token });
      dispatch({ type: SUCCESS_GET_SESSIONS, payload: response.data });
    } catch (err) {
      dispatch({ type: FAIL_GET_SESSIONS });
    }
  } else {
    dispatch({ type: FAIL_GET_SESSIONS });
  }
};
