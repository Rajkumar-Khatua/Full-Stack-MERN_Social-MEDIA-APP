// declare the state
import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "644a6c8e49f6435617c5f580",
    username: "elon",
    email: "elongmail.com",
    password: "$2b$10$xO18lKAeTUknXu3KMfXdMeNyPKOKNxn5RLw8qVaEUi6vpPgI.Llg.",
    profilPicture: "",
    coverPicture: "",
    followers: Array,
    followings: Array,
    isAdmin: false,
    city: "New York",
    from: "India",
    createdAt: "2023-04-27T12:37:34.164+00:00",
    updatedAt: "2023-04-30T14:35:54.987+00:00",
    __v: 0,
    desc: "Hey this is Elon",
    reslationship: "2",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

// AuthContext Provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
