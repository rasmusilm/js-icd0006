import {defineStore} from "pinia";
import type {Post} from "@/domain/Post";

export const usePostsStore = defineStore({
    id: "ideaPosts",
    state: () => ({
        posts: [] as Post[],
        indexToUpdate: null as number | null
    }),
    getters: {
        personCount: (state) => state.posts.length
    },
    actions: {
        add(post: Post) {
            this.posts.push(post);
        },
        addAll(posts: Post[]) {
            for (let i = 0; i < posts.length; i++) {
                this.add(posts[i]);
            }
        },
        index(id: string) {
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i].id == id) {
                    this.indexToUpdate = i;
                }
            }
        },
        update(post: Post) {
            this.$patch((state) => {
                for (let i = 0; i < state.posts.length; i++) {
                    if (state.posts[i].id == post.id) {
                        state.posts[i] = post
                    }
                }
            })
            // for (let i = 0; i < this.posts.length; i++) {
            //     if (this.posts[i].Id == post.Id) {
            //         this.posts[i] = post
            //     }
            // }
            // this.add(post);
            console.log("updated")
            // console.log(this.posts)
        }
    }
});