import {IPerson} from "../domain/IPerson";
import {AppState} from "../state/AppState";

export class Persons {
    public persons: IPerson[] = []

    constructor(private state: AppState) {
        console.log("Persons start")
        this.persons.push({
            fname: "name",
            lname: "lname"
        }, {
            fname: "name2",
            lname: "lname"
        })
    }

}
