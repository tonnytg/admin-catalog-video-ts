import {Category, CategoryProperties} from "./category";
import { omit } from "lodash";
import {validate as uuidValidate} from 'uuid';

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

    test("id field", () => {
        let category = new Category({name: "Movie"})
        expect(category.id).not.toBeNull();
        expect(uuidValidate(category.id)).toBeTruthy();

        category = new Category({name: "Movie"}, null)
        expect(category.id).not.toBeNull();
        expect(category.id).not.toBe(null);
        expect(uuidValidate(category.id)).toBeTruthy();

        category = new Category({name: "Movie"}, undefined)
        expect(category.id).not.toBeNull();
        expect(category.id).not.toBe(undefined)
        expect(uuidValidate(category.id)).toBeTruthy();

        category = new Category({name: "Movie"}, "57b06774-19c2-41f5-b8e3-1bf3f364b653")
        expect(category.id).not.toBeNull();
        expect(uuidValidate(category.id)).toBeTruthy();

    })

    test("id field with array", () => {

        type  CategoryData = {props: CategoryProperties, id?: string | undefined}

        const data: CategoryData[] = [
            {props: {name: "Movie"}},
            {props: {name: "Movie"}, id: null},
            {props: {name: "Movie"}, id: undefined},
            {props: {name: "Movie"}, id: "57b06774-19c2-41f5-b8e3-1bf3f364b653"},
        ]

        data.forEach(i => {
            const category = new Category(i.props, i.id);
            expect(category.id).not.toBeNull();
            expect(uuidValidate(category.id)).toBeTruthy();
        });

    })
});

// TDD - Kent Beck
