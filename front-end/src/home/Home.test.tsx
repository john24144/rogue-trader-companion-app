import { render, screen } from "@testing-library/react";
import Home from "./Home.tsx";

describe("Home Component", () => {
    it("should render", async () => {
        render(<Home />);

        expect(await screen.findByText("HOME")).toBeVisible();
    });
});
