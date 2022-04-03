import {HttpClient} from "aurelia";
import {IJoke} from "./IJoke";
import {AppState} from "../state/AppState";

export class JokesService {
    constructor(private httpClient: HttpClient, private state: AppState) {
        console.log("service")
    }

    getJoke(category: string): Promise<IJoke> {
        return this.httpClient.fetch(`https://api.chucknorris.io/jokes/random?category=${category}`, {  cache: "no-store" })
            .then(response => response.json())
            .then((data: IJoke) => {
                return data;
            });
    }

    loadCategories() {
        const cats = this.getCategories();
        cats.then(data => {
            for (let i = 0; i < 3; i++) {
                const cat = this.random_item(data)
                console.log(data);
                console.log(cat)
                this.state.categories.push(cat)
            }
        })
    }

    getCategories(): Promise<Array<string>> {
        return this.httpClient.fetch(`https://api.chucknorris.io/jokes/categories`, {cache: "no-store"})
            .then(response => response.json())
            .then((data: Array<string>) => {
                return data;
            });
    }

    random_item(items: Array<string>): string
    {
        const index = Math.floor(Math.random()*items.length);
        const item = items[index]
        // remove the random item
        items.splice(index, 1)
        return item;
    }
}