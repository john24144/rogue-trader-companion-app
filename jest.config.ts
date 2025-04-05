import { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
    testEnvironment: "jsdom",
    transform: {
        "^.+.tsx?$": ["ts-jest", {}],
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy",
    },
};

export default jestConfig;
