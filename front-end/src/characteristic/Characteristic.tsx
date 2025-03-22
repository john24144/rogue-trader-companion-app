import { outerBox, innerBox } from "./Characteristic.module.css";
import { box } from "../global.module.css";
import { FC } from "react";

const Characteristic: FC<{
    name: string;
    characteristic?: CharacteristicModel;
}> = function ({ name, characteristic }) {
    const bonus = Math.floor((characteristic?.VALUE ?? 1) / 10);

    return (
        <div className={`${box} ${outerBox}`}>
            <h3>{name}</h3>
            <div className={`${box} ${innerBox}`}>
                <span>
                    {characteristic?.VALUE ?? 0} (+{bonus})
                </span>
            </div>
        </div>
    );
};

export type CharacteristicModel = {
    VALUE?: number;
    ADVANCEMENT?: "basic" | "trained";
};

export default Characteristic;
