import {BaseService} from "./BaseService";
import {Rating} from "../domain/Rating";

export class RatingService extends BaseService<Rating> {
    constructor() {
        super("IdeaRating");
    }
}