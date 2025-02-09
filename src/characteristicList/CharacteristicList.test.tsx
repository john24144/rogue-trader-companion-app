import { render, screen, waitFor } from "@testing-library/react";
import Characteristic from "../characteristic/Characteristic.tsx";
import CharacteristicList from "./CharacteristicList.tsx";

jest.mock("../characteristic/Characteristic.tsx");

describe("Characteristic List Component", () => {
    it("should render nothing if character does not have any characteristics", async () => {
        expect(CharacteristicList({ character: {} })).toEqual(
            false,
        );
    });

    it("should render nothing if character characteristics is not a list", async () => {
        expect(CharacteristicList({ character: { characteristics: "" } })).toEqual(
            false,
        );
    });

    it("should render one CHARACTERISTICS if character characteristics is an empty list", async () => {
        render(<CharacteristicList character={{ characteristics: [] }} />);
        expect(await screen.findByText("CHARACTERISTICS")).toBeVisible();
    });
    it("should render one characteristic", async () => {
        render(<CharacteristicList character={{ characteristics: ["one"] }} />);

        await waitFor(() =>
            expect(Characteristic).toHaveBeenCalledWith(
                { characteristic: "one" },
                {},
            ),
        );
    });

    it("should render multiple characteristics", async () => {
        render(<CharacteristicList character={{ characteristics: ["one", "two", "three"] }} />);

        await waitFor(() => {
            expect(Characteristic).toHaveBeenCalledWith(
                { characteristic: "one" },
                {},
            );
            expect(Characteristic).toHaveBeenCalledWith(
                { characteristic: "two" },
                {},
            );
            expect(Characteristic).toHaveBeenCalledWith(
                { characteristic: "three" },
                {},
            );
        });
    });
});
