import { useLoaderData } from "react-router-dom";
import CharacterLink from "../characterLink/CharacterLink.tsx";
import { FC } from "react";
import { CharacterModel } from "../character/Character.tsx";

const CharacterList: FC = function () {
    const data = useLoaderData() as CharacterListModel;
    const characters =
        data !== null && typeof data === "object" ? Object.entries(data) : [];

    return (
        <>
            <h1>CHARACTERS</h1>
            {characters.map((entry, index) => (
                <CharacterLink key={index} id={entry[0]} character={entry[1]} />
            ))}
        </>
    );
};

export type CharacterListModel =
    | unknown
    | { [key: string]: unknown | CharacterModel };

export default CharacterList;
