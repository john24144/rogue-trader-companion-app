import { render, screen } from "@testing-library/react";
import Origin from "../../../main/javascript/origin/Origin.tsx";

jest.mock("../../../main/resources/originProperties.json", () => ({
    __esModule: true,
    default: {
        HOME_WORLD: {
            NAME: "Home World",
        },
    },
}));

describe("Origin Component", () => {
    it("should render section header", async () => {
        render(<Origin />);
        expect(await screen.findByText("ORIGIN")).toBeVisible();
    });

    it("should render origin property", async () => {
        render(<Origin origin={{ HOME_WORLD: "some value" }} />);
        expect(await screen.findByText(/Home World/)).toBeVisible();
        expect(await screen.findByText("some value")).toBeVisible();
    });
});
