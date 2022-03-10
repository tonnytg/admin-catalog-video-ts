import UniqueEntityId from "./unique-entity-id.vo";
import InvalidUuidError from "../errors/invalid-uuid.error";
import {validate as uuidValidate} from 'uuid';

describe("UniqueEntityId Unit Tests", () => {
    // it used for a phrase more complex
    it("should throw error when uuid is invalid", () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
        expect(()=> new UniqueEntityId("teste")).toThrow(new InvalidUuidError())
        expect(validateSpy).toHaveBeenCalled(); // Force to check method it is called
    })

    it("should accept a uuid passed in construct", () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
        const uuid = "a16f0298-0dbb-47db-835a-02266a25973e";
        const vo = new UniqueEntityId(uuid)
        expect(vo.id).toBe(uuid)
        expect(validateSpy).toHaveBeenCalled();
    })

    it("should accept a uuid passed in construct", () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
        const vo = new UniqueEntityId()
        expect(uuidValidate(vo.id)).toBeTruthy();
        expect(validateSpy).toHaveBeenCalled();
    })
})
