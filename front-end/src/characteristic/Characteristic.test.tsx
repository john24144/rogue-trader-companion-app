import { render, screen } from "@testing-library/react";
import Characteristic from "./Characteristic.tsx";

describe("Characteristic component", () => {
    it("should display name", async () => {
        render(<Characteristic name={"some name"} />);
        expect(await screen.findByText("some name")).toBeVisible();
    });

    it("should display characteristic value and bonus", async () => {
        render(
            <Characteristic
                name={"some name"}
                characteristic={{ VALUE: 32 }}
            />,
        );
        expect(await screen.findByText("32 (+3)")).toBeVisible();
    });
});
