import {Category, CategoryProperties} from "./category";
import { omit } from "lodash";
import UniqueEntityId from "../../../@seedwork/domain/unique-entity-id.vo";

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

    test("constructor of category flexible", () => {
        let category = new Category({name: "Movie"})
        let props = omit(category.props, "create_at");
        expect(props).toStrictEqual({
            name: "Movie",
            description: null,
            is_active: true,
        })
        expect(category.props.create_at).toBeInstanceOf(Date);

        category = new Category({
            name: "Movie",
            description: "other description",
        })
        expect(category.props).toMatchObject({
            name: "Movie",
            description: "other description",
        })

        category = new Category({
            name: "Movie",
            is_active: true,
        })
        expect(category.props).toMatchObject({
            name: "Movie",
            is_active: true,
        })

    })

    test("getter of name field", () => {
        let create_at = new Date();
        let category = new Category({name: "Movie", create_at})
        expect(category.name).toBe("Movie");
        expect(category.description).toBe(null);
        expect(category.description).toBeNull();
        expect(category.is_active).toBe(true);
        expect(category.create_at).toBe(create_at);
    })

    test("getter of create_at prop", () => {
        let category = new Category({
            name: "Movie",
        });

        expect(category.create_at).toBeInstanceOf(Date);

        let create_at = new Date();
        category = new Category({
            name: "Movie",
            create_at,
        });

        expect(category.create_at).toBe(create_at);
    })

    test("id field with array", () => {

        type  CategoryData = {props: CategoryProperties, id?: UniqueEntityId }

        const data: CategoryData[] = [
            {props: {name: "Movie"}},
            {props: {name: "Movie"}, id: null},
            {props: {name: "Movie"}, id: undefined},
            {props: {name: "Movie"}, id: new UniqueEntityId()},
        ]

        data.forEach(i => {
            const category = new Category(i.props, i.id as any);
            expect(category.id).not.toBeNull();
            expect(category.id).toBeInstanceOf(UniqueEntityId)
        });

    })
});

// TDD - Kent Beck
