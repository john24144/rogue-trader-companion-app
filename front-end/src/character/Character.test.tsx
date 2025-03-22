import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Character from "./Character.tsx";
import Characteristic from "../characteristic/Characteristic.tsx";
import Origin from "../origin/Origin.tsx";

jest.mock("../characteristic/Characteristic.tsx");
jest.mock("../origin/Origin.tsx");
jest.mock("../../resources/characteristics.json", () => ({
    __esModule: true,
    default: {
        WEAPON_SKILL: {
            NAME: "Weapon Skill",
            ABBREVIATION: "WS",
        },
    },
}));

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
    it("should render CHARACTERISTICS if loader data is null", async () => {
        renderCharacter(null);
        expect(await screen.findByText("CHARACTERISTICS")).toBeVisible();
    });

    it("should render CHARACTERISTICS if loader data is an empty object", async () => {
        renderCharacter({});
        expect(await screen.findByText("CHARACTERISTICS")).toBeVisible();
    });

    it("should render character name if present", async () => {
        renderCharacter({ NAME: "Fronch" });
        expect(await screen.findByText("Fronch")).toBeVisible();
    });

    it("should render characteristics", async () => {
        renderCharacter({ CHARACTERISTICS: { WEAPON_SKILL: "some value" } });
        await waitFor(() =>
            expect(Characteristic).toBeCalledWith(
                {
                    name: "Weapon Skill",
                    characteristic: "some value",
                },
                {},
            ),
        );
    });

    it("should render origin", async () => {
        renderCharacter({ ORIGIN: { HOME_WORLD: "some value" } });
        await waitFor(() =>
            expect(Origin).toBeCalledWith(
                { origin: { HOME_WORLD: "some value" } },
                {},
            ),
        );
    });
});
