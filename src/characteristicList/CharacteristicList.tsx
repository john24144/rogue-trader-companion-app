import { FC } from "react";
import Characteristic, { CharacteristicModel } from "../characteristic/Characteristic.tsx";
import { CharacterModel } from "../character/Character.tsx";

const CharacteristicList: FC<{ character: object & CharacterModel }> =
    function ({ character }) {
        return (
            "characteristics" in character &&
            Array.isArray(character.characteristics) && (
                <div>
                    <h2>CHARACTERISTICS</h2>
                    {character.characteristics.map((characteristic, index) => (
                        <Characteristic
                            key={index}
                            characteristic={characteristic}
                        />
                    ))}
                </div>
            )
        );
    };

export type CharacteristicListModel = unknown | { [key: string]: unknown | CharacteristicModel };
export default CharacteristicList;
