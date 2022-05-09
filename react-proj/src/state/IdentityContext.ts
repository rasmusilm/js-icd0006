import React from "react";
import {IIdentityState} from "./base/IIdentityState";


export const initialIdentityState: IIdentityState = {
    setJwt: () => {},
}
export const IdentityContext = React.createContext<IIdentityState>(initialIdentityState)