import UniqueEntityId from "./unique-entity-id.vo";

describe("UniqueEntityId Unit Tests", () => {
    // it used for a phrase more complex
    it("should throw error when uuid is invalid", () => {
        new UniqueEntityId('fake id')
    })
})