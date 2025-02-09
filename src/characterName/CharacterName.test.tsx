import CharacterName from "./CharacterName.tsx";

describe("Character Name component", () => {
    it("should render nothing if character does not have a name", async () => {
        expect(CharacterName({ character: {} })).toEqual(
            false,
        );
    });
});