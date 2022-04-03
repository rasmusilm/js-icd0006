import {IJoke} from "../domain/IJoke";

export class AppState {
    public seen_jokes: IJoke[] = [];
    public categories: string[] = []
    public categories_set = false;

    constructor() {
        console.log("State")
    }

    is_seen(joke: IJoke) : boolean {
        for (let i = 0; i < this.seen_jokes.length; i++) {
            if (this.seen_jokes[i].id === joke.id) {
                return true;
            }
        }
        return false;
    }

    record_joke(joke: IJoke) {
        this.seen_jokes.push(joke)
    }

}