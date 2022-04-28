import {BaseService} from "@/services/base/BaseService";
import type {Post} from "@/domain/Post";

export class PostService extends BaseService<Post> {
    constructor() {
        super("projectIdea");
    }
}