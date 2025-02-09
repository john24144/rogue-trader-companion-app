import { LoaderFunction } from "react-router-dom";
import characters from "../../resources/characters.json";
import { CharacterModel } from "./Character.tsx";

const CharacterLoader: LoaderFunction = function ({ params }) {
    return (characters as { [key: string]: CharacterModel })[
        params.characterId ?? ""
    ] as object;
};

export default CharacterLoader;
