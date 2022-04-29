import {BaseService} from "@/services/base/BaseService";
import type {Rating} from "@/domain/Rating";

export class RatingService extends BaseService<Rating> {
    constructor() {
        super("ideaRating");
    }
}