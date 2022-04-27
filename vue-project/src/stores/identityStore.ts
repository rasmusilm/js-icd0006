import { defineStore } from 'pinia';
import type { IJWTResponse } from "@/domain/IJWTResponse";

export const useIdentityStore = defineStore("identity", {
    state: () => ({
        jwt: null as IJWTResponse | null,
        identified: false
    }),
    actions: {
        identify(data: IJWTResponse) {
            this!.identified = true;
            this!.jwt = data;
        },
        forget() {
            this!.identified = false;
            this!.jwt = null as IJWTResponse | null;
        }
    },
});