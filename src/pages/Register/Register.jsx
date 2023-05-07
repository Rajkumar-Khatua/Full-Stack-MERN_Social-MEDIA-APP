import { useRef, useState } from "react";
import "./register.scss";
import axios  from 'axios';
// import { useHistory } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import { LinearProgress } from '@mui/material';

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const CNfpassword = useRef();

// const history = useHistory();
const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (CNfpassword.current.value !== password.current.value) {
      CNfpassword.current.setCustomValidity(
        "Make sure your password is correct"
      );
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try{
          // instaed of this methiod use HistoryHook
        // const respose = await axios.post("http://localhost:8800/api/auth/register", user);
         await axios.post("http://localhost:8800/api/auth/register", user);
        navigate('/login')
        
      }catch(err){
        console.log(err)
      }
    }
  };

  return (
    <div className='registration-container'>
      <h1 className='title1'>
        Welcome To TheSocial <br /> <span>Fill free to talk each-other</span>{" "}
      </h1>
      <h1 className='title'>Register</h1>

      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          type='text'
          required
          ref={username}
          placeholder='User Name'
        />

        <label>Email:</label>
        <input
          placeholder='E-mail Address'
          type='email'
          required
          ref={email}
        />

        <label>Password:</label>
        <input
          placeholder='Password'
          type='password'
          required
          ref={password}
          minLength={6}
        />
        <label>Conform Password:</label>
        <input
          placeholder='Conform Password'
          type='password'
          required
          ref={CNfpassword}
          minLength={6}
        />

        <button type='submit'>Register</button>
      </form>
      <Link to='/login'>
        <span
          className='regisBtn'
          >
          Already have an account ?
        </span>
      </Link>
    </div>
  );
}
export default Register;
