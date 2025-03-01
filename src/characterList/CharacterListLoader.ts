import { LoaderFunction } from "react-router-dom";
import characters from "../../resources/characters.json";
import { CharacterListModel } from "./CharacterList.tsx";

const CharacterListLoader: LoaderFunction = function () {
    return characters as CharacterListModel;
};

export default CharacterListLoader;
