import {defineStore} from "pinia";
import type {Tag} from "@/domain/Tag";

export const useTagStore = defineStore({
    id: "tags",
    state: () => ({
        tags: [] as Tag[]
    }),
    actions: {
        addAll(tags: Tag[]) {
            for (let i = 0; i < tags.length; i++) {
                this.tags.push(tags[i]);
            }
        }
    }
});