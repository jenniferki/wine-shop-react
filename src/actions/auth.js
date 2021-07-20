import * as types from "./types";

const userSignup = (username) => ({
  type: types.AUTH_LOGIN,
  username,
});

const userReset = () => ({
  type: types.AUTH_LOGOUT,
});

export const doSignup = (username) => (dispatch) => {
  try {
    dispatch(userSignup(username));
  } catch (error) {
    alert(error);
  } finally {
  }
};

export const doReset = () => (dispatch) => {
  dispatch(userReset());
};
