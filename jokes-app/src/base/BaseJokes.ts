import {IJoke} from "../domain/IJoke";
import {JokesService} from "../domain/JokesService";
import {AppState} from "../state/AppState";
import {HttpClient} from "aurelia";

export class BaseJokes {
    public jokes: IJoke[] = []
    protected service: JokesService;

    constructor(private state: AppState) {
        console.log("BaseJokes start");
        this.service = new JokesService(new HttpClient(), state)
    }

    async loadJokes(promice: Promise<IJoke>, amount: number) {
        promice
            .then(j => {
                if (!this.state.is_seen(j)) {
                    this.jokes.push(j);
                    this.state.record_joke(j);
                }
            })
            .then(j => {
                if (this.jokes.length < amount) {
                    this.loadJokes(this.service.getJoke("dev"), amount)
                }
            })
    }

    async addNewJoke(promice: Promise<IJoke>) {
        console.log("start adding")
        promice
            .then(j => {
                if (!this.state.is_seen(j)) {
                    this.state.record_joke(j);
                }
                console.log("adding")
                this.jokes.push(j);
            })
        console.log("added")
    }
}