import {Category} from "./category";

describe("Category Unit Test", () => {

    test("constructor of category", () => {

        const create_at = new Date();

        // Arrange Act Assert

        // Arrange
        const props = {
            name: "name",
            description: "description",
            is_active: true,
            create_at,
        };

        // Act
        const category: Category = new Category(props);

        // Assert
        expect(category.name).toBe("name");
        expect(category.name).not.toBe("")
        expect(category.props).toStrictEqual({
            name: "name",
            description: "description",
            is_active: true,
            create_at,
        })
    } )
});

// TDD - Kent Beck
