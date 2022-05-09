// import {useIdentityStore} from "@/stores/identityStore";
import type {IJWTResponse} from "../domain/IJWTResponse";
import type {IServiceResult} from "./IServiceResult";
// @ts-ignore
import type { AxiosError } from "axios";
import httpCLient from "./HttpClient";

export class IdentityService {

    async login(email: string, password: string): Promise<IServiceResult<IJWTResponse>> {
        try {
            let loginInfo = {
                email,
                password
            }
            let response = await httpCLient.post("/identity/account/login", loginInfo);
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };

        } catch (e) {
            let response = {
                status: (e as AxiosError).response!.status,
                // @ts-ignore
                errorMsg: (e as AxiosError).response!.data.error,
            }

            console.log(response);

            console.log((e as AxiosError).response);

            return response;
        }
    }

    async refreshIdentity(jwt: IJWTResponse): Promise<IServiceResult<IJWTResponse>> {
        try {

            let response = await httpCLient.post("/identity/account/refreshtoken",
                {
                    jwt: jwt.token,
                    refreshToken: jwt.refreshToken
                }
            );
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };

        } catch (e) {
            let response = {
                status: (e as AxiosError).response!.status,
                // @ts-ignore
                errorMsg: (e as AxiosError).response!.data.error,
            }

            console.log(response);

            console.log((e as AxiosError).response);

            return response;
        }
    }

    async register(email: string, password: string, name: string): Promise<IServiceResult<IJWTResponse>> {
        try {
            let registerInfo = {
                email,
                password,
                name
            }

            let response = await httpCLient.post("/identity/account/register", registerInfo);
            return {
                status: response.status,
                data: response.data as IJWTResponse
            };
        } catch (e) {
            let response = {
                status: (e as AxiosError).response!.status,
                // @ts-ignore
                errors: (e as AxiosError).response!.data.errors,
            }

            console.log(response);

            console.log((e as AxiosError).response);

            return response;
        }
    }


}
