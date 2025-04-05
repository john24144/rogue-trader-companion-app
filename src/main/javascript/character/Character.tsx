import type { FC } from "react";
import { useLoaderData } from "react-router-dom";
import Characteristic, {
    CharacteristicModel,
} from "../characteristic/Characteristic.tsx";
import { characteristicsContainer } from "./Character.module.css";
import characteristics from "../../resources/characteristics.json";
import Origin, { OriginModel } from "../origin/Origin.tsx";

const Character: FC = function () {
    const character = useLoaderData() as undefined | null | CharacterModel;

    return (
        <>
            <h1>{character?.NAME}</h1>
            <h2>CHARACTERISTICS</h2>
            <div className={characteristicsContainer}>
                {Object.entries(characteristics).map(
                    ([id, characteristic], index) => (
                        <Characteristic
                            key={index}
                            name={characteristic.NAME}
                            characteristic={character?.CHARACTERISTICS?.[id]}
                        />
                    ),
                )}
            </div>
            <Origin origin={character?.ORIGIN} />
        </>
    );
};

export type CharacterModel = {
    NAME: string;
    CHARACTERISTICS: { [key: string]: CharacteristicModel };
    ORIGIN: OriginModel;
};

export default Character;
