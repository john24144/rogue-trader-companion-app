import CharacterLink from "../characterLink/CharacterLink.tsx";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

describe("Character Link component", () => {
    it("should render nothing if character is null", async () => {
        expect(CharacterLink({ id: "some-id", character: null })).toEqual(
            false,
        );
    });

    it("should render nothing if character is undefined", async () => {
        expect(CharacterLink({ id: "some-id", character: undefined })).toEqual(
            false,
        );
    });

    it("should render nothing if character it does not have a name", async () => {
        expect(CharacterLink({ id: "some-id", character: {} })).toEqual(false);
    });

    it("should render nothing if character name is not a string", async () => {
        expect(
            CharacterLink({ id: "some-id", character: { name: 0 } }),
        ).toEqual(false);
    });

    it("should render link for valid character", async () => {
        render(
            <RouterProvider
                router={createMemoryRouter([
                    {
                        path: "/",
                        element: (
                            <CharacterLink
                                id={"some-id"}
                                character={{ name: "some name" }}
                            />
                        ),
                    },
                    {
                        path: "/characters/some-id",
                        element: <span>character detail</span>,
                    },
                ])}
            />,
        );

        const link = await screen.findByText("some name");
        expect(link).toBeVisible();

        fireEvent.click(link);

        expect(await screen.findByText("character detail")).toBeVisible();
    });
});
