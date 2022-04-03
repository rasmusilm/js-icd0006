import {AppState} from "../../state/AppState";
import {BaseJokes} from "../../base/BaseJokes";

export class Jokes extends BaseJokes {

    constructor(state: AppState) {
        super(state)
        console.log("Jokes start");
        for (let i = 0; i < 5; i++) {
            this.addNewJoke(this.service.getJoke(state.categories[0]))
        }

        console.log(this.jokes)

    }
}