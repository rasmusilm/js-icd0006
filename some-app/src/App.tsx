import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/Structure.css'
import Home from "./components/Home";
import Navbar from "./components/shared/navbar";
import Register from "./components/Register";
import Login from "./components/Login";

const GetPage = () => {
  const route = window.location.pathname;
  if (route === '/register') return <Register />;
  if (route === '/login') return <Login />
  return <Home />;
}

function App() {
  return (
    <div className="App">
      <div className=""
      <Navbar />
      {GetPage()}
    </div>
  );
}

export default App;
