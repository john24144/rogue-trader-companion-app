import CharacterList from "./characterList/CharacterList.tsx";
import Character from "./character/Character.tsx";
import Home from "./home/Home.tsx";
import CharacterListLoader from "./characterList/CharacterListLoader.ts";
import CharacterLoader from "./character/CharacterLoader.ts";
import { RouteObject } from "react-router-dom";
import Outline from "./outline/Outline.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Outline />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/characters",
                element: <CharacterList />,
                loader: CharacterListLoader,
            },
            {
                path: "/characters/:characterId",
                element: <Character />,
                loader: CharacterLoader,
            },
        ],
    },
];

export default routes;
