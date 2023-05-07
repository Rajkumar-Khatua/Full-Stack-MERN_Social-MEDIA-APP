export const LoginStart = (userCredentials) => ({
    // at the initial state we don't do anything --cuz this stage we
    // request to login by clicking login button
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  // if login sucessfully TODO: check
  payload: user,
});

export const LoginFailure = (user) => ({
  type: "LOGIN_FAILURE",
  // if login failure to throw the error or exception
  payload: error,
});
