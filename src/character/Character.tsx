import type { FC } from "react";
import { useLoaderData } from "react-router-dom";
import CharacterName, { CharacterNameModel } from "../characterName/CharacterName.tsx";
import CharacteristicList, { CharacteristicListModel } from "../characteristicList/CharacteristicList.tsx";
import { OriginModel } from "../origin/OriginModel.ts";

const Character: FC = function () {
    const data = useLoaderData() as CharacterModel;
    return (
        data !== null &&
        typeof data === "object" && (
            <>
                <CharacterName character={data} />
                <CharacteristicList character={data} />
            </>
        )
    );
};

export type CharacterModel =
    | unknown
    | {
    name: CharacterNameModel;
    characteristics: CharacteristicListModel;
    origin: OriginModel;
};

export default Character;
