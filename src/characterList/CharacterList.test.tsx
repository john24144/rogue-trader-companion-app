import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import CharacterList from "./CharacterList.tsx";
import CharacterLink from "../characterLink/CharacterLink.tsx";

jest.mock("../characterLink/CharacterLink.tsx");

function renderCharacterList(characterList: object) {
    render(
        <RouterProvider
            router={createMemoryRouter([
                {
                    path: "/",
                    element: <CharacterList />,
                    loader: () => characterList,
                },
            ])}
        />,
    );
}

describe("Character List component", () => {
    it("should render CHARACTERS", async () => {
        renderCharacterList({});
        expect(await screen.findByText("CHARACTERS")).toBeVisible();
    });

    it("should render one character link", async () => {
        renderCharacterList({ "first id": "first character" });

        await waitFor(() =>
            expect(CharacterLink).toHaveBeenCalledWith(
                { id: "first id", character: "first character" },
                {},
            ),
        );
    });

    it("should render multiple character links", async () => {
        renderCharacterList({
            "first id": "first character",
            "second id": "second character",
            "third id": "third character",
        });

        await waitFor(() => {
            expect(CharacterLink).toHaveBeenCalledWith(
                { id: "first id", character: "first character" },
                {},
            );
            expect(CharacterLink).toHaveBeenCalledWith(
                { id: "second id", character: "second character" },
                {},
            );
            expect(CharacterLink).toHaveBeenCalledWith(
                { id: "third id", character: "third character" },
                {},
            );
        });
    });
});
