import {BaseService} from "@/services/base/BaseService";
import type {PostComment} from "@/domain/PostComment";

export class PostCommentService extends BaseService<PostComment> {
    constructor() {
        super("PostComment");
    }
}