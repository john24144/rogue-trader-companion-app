import Characteristic from "./Characteristic.tsx";
import { render, screen } from "@testing-library/react";

describe("Characteristic component", () => {
    it("should render nothing if characteristic is null", async () => {
        expect(Characteristic({ characteristic: null })).toEqual(
            false,
        );
    });

    it("should render nothing if characteristic is not an object", async () => {
        expect(Characteristic({ characteristic: "" })).toEqual(
            false,
        );
    });

    it("should render nothing if characteristic is does not have a name", async () => {
        expect(Characteristic({ characteristic: {} })).toEqual(
            false,
        );
    });

    it("should render nothing if characteristic name is not a string", async () => {
        expect(Characteristic({ characteristic: { name: 0 } })).toEqual(
            false,
        );
    });

    it("should render characteristic name if valid", async () => {
        render(<Characteristic characteristic={{ name: "some name"}} />);
        expect(await screen.findByText("some name")).toBeVisible();
    });
});