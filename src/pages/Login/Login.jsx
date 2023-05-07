import { useContext, useRef, useState } from "react";
import "./login.scss";
import { loginCall } from "../../ApiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar, AvatarGroup, LinearProgress } from "@mui/material";

import { Link } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`Email: ${email}, Password: ${password}`);
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className='login-container'>
      <h1 className='title1'>
        Nice to See you Again <br /> <span>Welcome Back</span>{" "}
      </h1>
      <h1 className='title'>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type='email'
          required
          ref={email}
        />

        <label>Password:</label>
        <input
          type='password'
          minLength={6}
          required
          ref={password}
        />

        <button type='submit'>
          {isFetching ? <LinearProgress color='#fff' /> : "Login"}
        </button>
      </form>
      <Link to='/register'>
        <span
          className='regisBtn'
          type='submit'>
          {isFetching ? <LinearProgress color='#fff' /> : "Create new Account"}
        </span>
      </Link>
    </div>
  );
}
export default Login;
