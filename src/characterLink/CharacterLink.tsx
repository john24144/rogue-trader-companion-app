import { Link } from "react-router-dom";
import { FC } from "react";

const CharacterLink: FC<{
    id: string;
    character: unknown;
}> = function ({ id, character }) {
    return (
        character !== null &&
        typeof character === "object" &&
        "name" in character &&
        typeof character.name === "string" && (
            <Link to={"/characters/" + id}>{character.name}</Link>
        )
    );
};

export default CharacterLink;
