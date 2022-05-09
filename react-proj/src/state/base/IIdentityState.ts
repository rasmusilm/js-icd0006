import {IJWTResponse} from "../../domain/IJWTResponse";

export interface IIdentityState {
    jwt?: IJWTResponse;
    setJwt: (jwt?: IJWTResponse) => void;
}