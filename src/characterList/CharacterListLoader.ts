import { LoaderFunction } from "react-router-dom";
import characters from "../../resources/characters.json";
import { CharacterModel } from "../character/CharacterModel.ts";

/**
 *
 * @constructor
 */
const CharacterListLoader: LoaderFunction = function () {
    return characters as { [key: string]: CharacterModel };
};

export default CharacterListLoader;
