const AuthReducer = (state, action) => {
  //switch case action
  // action is comming from the AuthAction and type is also comming from
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
