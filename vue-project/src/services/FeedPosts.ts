import {BaseService} from "@/services/base/BaseService";
import type {Post} from "@/domain/Post";

export class FeedPostService extends BaseService<Post> {
    constructor() {
        super("FeedPost");
    }
}