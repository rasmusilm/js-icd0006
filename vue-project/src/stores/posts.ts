import {defineStore} from "pinia";
import type {Post} from "@/domain/Post";

export const usePostsStore = defineStore({
    id: "persons",
    state: () => ({
        posts: [
        ] as Post[],
    }),
    getters: {
        personCount: (state) => state.posts.length,
    },
    actions: {
        add(person: Post) {
            this.posts.push(person);
        }
    },
});