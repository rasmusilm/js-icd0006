import {AppState} from "../../state/AppState";
import {JokesService} from "../../domain/JokesService";
import {HttpClient} from "aurelia";

export class Navigation {
    public categories: string[]

    constructor(private state: AppState) {
        if (!state.categories_set) {
            console.log("categories")
            new JokesService(new HttpClient(), state).loadCategories()
        }
        console.log("loading categories")
        this.categories = state.categories
        console.log("loaded")
        console.log(this.categories)
    }

}