import { FC } from "react";
import { box } from "../global.module.css";
import { section } from "./Origin.module.css";
import originProperties from "../../resources/originProperties.json";

const Origin: FC<{ origin?: OriginModel }> = ({ origin }) => {
    return (
        <>
            <h2>ORIGIN</h2>
            <div className={section}>
                {Object.entries(originProperties).map(([id, prop], index) => (
                    <div key={index} className={`${box}`}>
                        <h3>{prop.name}: </h3>
                        <p>{origin?.[id]}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export type OriginModel = { [key: string]: string };

export default Origin;
