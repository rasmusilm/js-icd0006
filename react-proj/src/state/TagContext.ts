import React from "react";
import {ITagState} from "./base/ITagState";


export const initialTagState: ITagState = {
    tags: [],
    setTags: () => {}
}
export const TagContext = React.createContext<ITagState>(initialTagState)