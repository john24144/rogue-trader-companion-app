import { Link, useLoaderData } from "react-router-dom";
import { FC } from "react";
import { CharacterModel } from "../character/Character.tsx";

const CharacterList: FC = function () {
    const data = useLoaderData() as undefined | null | CharacterListModel;
    const characters = Object.entries(data ?? {});

    return (
        <>
            <h1>CHARACTERS</h1>
            {characters.map((entry, index) => (
                <Link key={index} to={"/characters/" + entry[0]}>
                    {entry[1].name}
                </Link>
            ))}
        </>
    );
};

export type CharacterListModel = { [key: string]: CharacterModel };

export default CharacterList;
