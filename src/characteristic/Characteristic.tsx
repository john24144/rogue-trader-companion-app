import { FC } from "react";

const Characteristic: FC<{
    characteristic: CharacteristicModel;
}> = function({
    characteristic
}) {
    return (
        characteristic !== null &&
        typeof characteristic === "object" &&
        "name" in characteristic &&
        typeof characteristic.name === "string" && <>{characteristic.name}</>
    );
}

export type CharacteristicModel = unknown | {
    value: unknown | number;
    advancement: unknown | "basic" | "trained";
};

export default Characteristic;