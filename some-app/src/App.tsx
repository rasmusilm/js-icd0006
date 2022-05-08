import React from 'react';
import './style/App.css';
import './style/Structure.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/shared/navbar";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
        <div className="flex-container">
            <div className="edge">
            </div>
            <div className="content">
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
            <div className="edge">
            </div>
        </div>
    </>
  );
}

export default App;
