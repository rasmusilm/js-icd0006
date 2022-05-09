import {Tag} from "../../domain/Tag";

export  interface ITagState {
    tags: Tag[];
    setTags: (tags: Tag[]) => void;
}