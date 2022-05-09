import {BaseService} from "./BaseService";
import {Post} from "../domain/IPost";

export class PostService extends BaseService<Post> {
    constructor() {
        super("projectIdea");
    }
}