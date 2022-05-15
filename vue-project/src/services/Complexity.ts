import {BaseService} from "@/services/base/BaseService";
import type {Complexity} from "@/domain/Complexity";

export class ComplexityService extends BaseService<Complexity> {
    constructor() {
        super("FeedPost");
    }
}