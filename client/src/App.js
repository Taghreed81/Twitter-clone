import { connect } from 'react-redux'
import { loadUser } from './Redux/user/userAction'

import React, { useContext, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Auth from './components/Auth/Auth';
import Router from './Router';
import { UserContext } from './context/UserContext';

import './styles/index.css';
import 'emoji-mart/css/emoji-mart.css'


// test 
import Main from './components/Auth/main'
import Signup from './components/Auth/SignUpDialog'
function App() {

  const { user } = useContext(UserContext);


  return (
    <>
    
      <ToastContainer autoClose={2000} closeButton={false} />
      {user ? <Router /> : <Main />}
      {/* <ToastContainer autoClose={2000} closeButton={false} />
      {user ? <Router /> : <Auth />} */}
    </>
  );
}

export default App;

