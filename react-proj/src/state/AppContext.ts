import React from "react";
import {IAppState} from "./base/IAppState";


export const initialState: IAppState = {
    name: "initial",
    setName: () => {},
}
export const AppContext = React.createContext<IAppState>(initialState)