import {AppState} from "../../state/AppState";

export class SeenJokes {
    constructor(private state: AppState) {
        console.log("History")
    }
}