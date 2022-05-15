import {BaseService} from "@/services/base/BaseService";
import type {PostComment} from "@/domain/PostComment";

export class CommentService extends BaseService<PostComment> {
    constructor() {
        super("Comment");
    }
}