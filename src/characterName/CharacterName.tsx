import { FC } from "react";
import { CharacterModel } from "../character/Character.tsx";

const CharacterName: FC<{ character: object & CharacterModel }> = function ({
    character,
}) {
    return (
        "name" in character &&
        typeof character.name === "string" && <h1>{character.name}</h1>
    );
};

export type CharacterNameModel = unknown | string;

export default CharacterName;
