import {AppState} from "../../state/AppState";
import {JokesService} from "../../domain/JokesService";
import {HttpClient} from "aurelia";

export class Navigation {
    public categories: string[]

    constructor(private state: AppState) {
        if (!state.categories_set) {
            new JokesService(new HttpClient(), state).loadCategories()
        }
        this.categories = state.categories
        console.log(this.categories)
    }

}