module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["react", "react-refresh"],
    rules: {
        "react-refresh/only-export-components": [
            "error",
            { allowConstantExport: true },
        ],
        "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/naming-convention": "off",
        "sort-imports": "off",
        "sort-keys": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/no-magic-numbers": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parserOptions: {
                project: ["./tsconfig.json"],
            },
        },
    ],
};
