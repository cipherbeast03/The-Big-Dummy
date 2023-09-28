import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './Router/privaterouting';
import Home from './Home/home';
import Login from './Login/login';
import Profile from './Profile/profile';
import './style.css';

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
    //==========================================================Login========================================================
    // <div>
    //   <center>
    //     <h1>Welcome to Big dummy</h1>
    //     <Login />
    //   </center>
    //   <Footer />
    // </div>
  );
}
