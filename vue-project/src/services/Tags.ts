import {BaseService} from "@/services/base/BaseService";
import type {Tag} from "@/domain/Tag";

export class TagsService extends BaseService<Tag>{
    constructor() {
        super("Tag");
    }
}