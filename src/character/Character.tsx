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
            <h1>{character?.name}</h1>
            <h2>CHARACTERISTICS</h2>
            <div className={characteristicsContainer}>
                {Object.entries(characteristics).map(
                    ([id, characteristic], index) => (
                        <Characteristic
                            key={index}
                            name={characteristic.name}
                            characteristic={character?.characteristics?.[id]}
                        />
                    ),
                )}
            </div>
            <Origin origin={character?.origin} />
        </>
    );
};

export type CharacterModel = {
    name: string;
    characteristics: { [key: string]: CharacteristicModel };
    origin: OriginModel;
};

export default Character;
