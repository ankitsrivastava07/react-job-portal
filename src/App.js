import './App.css';
import React from "react";
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import { Routes } from 'react-router-dom';
import Error from './Error'
import Header from './Header';
import SignIn from './SignIn'
import ForgetPassword from './ForgetPassword'

function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path="/about" element={<About></About>} />
        <Route path="/users" element={<Users></Users>} />
        <Route path="forget-password" element={<ForgetPassword></ForgetPassword>} />
        <Route path='*' element={<Error></Error>} />
      </Routes>
    </Router>
  );

}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
