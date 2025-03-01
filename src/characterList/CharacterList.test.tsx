import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import CharacterList from "./CharacterList.tsx";

describe("Character List component", () => {
    it("should render CHARACTERS", async () => {
        render(
            <RouterProvider
                router={createMemoryRouter([
                    {
                        path: "/",
                        element: <CharacterList />,
                        loader: () => {
                            return {};
                        },
                    },
                ])}
            />,
        );

        expect(await screen.findByText("CHARACTERS")).toBeVisible();
    });

    it("should render link for valid character", async () => {
        render(
            <RouterProvider
                router={createMemoryRouter([
                    {
                        path: "/",
                        element: <CharacterList />,
                        loader: () => {
                            return { "some-id": { name: "some name" } };
                        },
                    },
                    {
                        path: "/characters/some-id",
                        element: <span>character detail</span>,
                    },
                ])}
            />,
        );

        fireEvent.click(await screen.findByText("some name"));
        expect(await screen.findByText("character detail")).toBeVisible();
    });
});
