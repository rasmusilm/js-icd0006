import React, {useState} from 'react';
import './style/App.css';
import './style/Structure.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/shared/navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import {AppContext, initialState} from './state/AppContext';
import {IJWTResponse} from "./domain/IJWTResponse";
import {initialIdentityState, IdentityContext} from "./state/IdentityContext";
import {initialTagState, TagContext} from "./state/TagContext";
import {Tag} from "./domain/Tag";

function App() {
    const setName = (name: string) => {
      let newState = {...appState};
      newState.name = name;
      setAppState(newState);
    }
    const setJwt = (jwt?: IJWTResponse) => {
      setIdentity({...identityState, jwt})
    }
    const setTags = (tags: Tag[]) => {
      setTag({...tagState, tags})
    }
    const [appState, setAppState] = useState({...initialState, setName})
    const [identityState, setIdentity] = useState({...initialIdentityState, setJwt})
    const [tagState, setTag] = useState({...initialTagState, setTags})

  return (
    <>
        <AppContext.Provider value={appState}>
            <IdentityContext.Provider value={identityState}>
                <TagContext.Provider value={tagState}>
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
                                <input type="text" value={appState.name} onChange={(e) => appState.setName(e.target.value)}></input>
                            </div>
                            <div className="edge">
                            </div>
                        </div>
                    </TagContext.Provider>
                </IdentityContext.Provider>
        </AppContext.Provider>
    </>
  );
}

export default App;
