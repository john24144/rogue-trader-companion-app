import { render, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Character from "./Character.tsx";
import CharacterName from "../characterName/CharacterName.tsx";
import CharacteristicList from "../characteristicList/CharacteristicList.tsx";

jest.mock("../characterName/CharacterName.tsx");
jest.mock("../characteristicList/CharacteristicList.tsx");

function renderCharacter(character: unknown) {
    render(
        <RouterProvider
            router={createMemoryRouter([
                {
                    path: "/",
                    element: <Character />,
                    loader: () => character as object,
                },
            ])}
        />,
    );
}

describe("Character component", () => {
    it("should render nothing if loader data is null", async () => {
        renderCharacter(null);
        await waitFor(() => {
            expect(CharacterName).not.toHaveBeenCalled();
            expect(CharacteristicList).not.toHaveBeenCalled();
        });
    });

    it("should render nothing if loader data is not an object", async () => {
        renderCharacter("");
        await waitFor(() => {
            expect(CharacterName).not.toHaveBeenCalled();
            expect(CharacteristicList).not.toHaveBeenCalled();
        });
    });

    it("should render character name and characteristics list for valid character", async () => {
        renderCharacter({});
        await waitFor(() => {
            expect(CharacterName).toHaveBeenCalledWith({ character: {} }, {});
            expect(CharacteristicList).toHaveBeenCalledWith(
                { character: {} },
                {},
            );
        });
    });
});
