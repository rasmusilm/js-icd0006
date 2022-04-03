import {AppState} from "../../state/AppState";
import {BaseJokes} from "../../base/BaseJokes";

export class Jokes3 extends BaseJokes {

    constructor(state: AppState) {
        super(state)
        console.log("Jokes2 start");
        for (let i = 0; i < 5; i++) {
            this.addNewJoke(this.service.getJoke(state.categories[2]))
        }

        console.log(this.jokes)

    }
}