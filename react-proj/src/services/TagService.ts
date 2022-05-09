import {BaseService} from "./BaseService";
import {Tag} from "../domain/Tag";

export class TagService extends BaseService<Tag> {
    constructor() {
        super("tag");
    }
}