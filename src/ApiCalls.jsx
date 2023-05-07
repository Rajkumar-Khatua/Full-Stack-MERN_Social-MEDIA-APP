import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
    // initial state when we make the request to the server for login
    dispatch({ type: "LOGIN_START" });

    try {
        const res = await axios.post("http://localhost:8800/api/auth/login", userCredentials);
        // login success 
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data }); // this data is use fro it include all the data like status and all user credentials information
    } catch (err) {
        // login failed
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};
