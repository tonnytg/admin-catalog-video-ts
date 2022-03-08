export type CategoryProperties = {
    name: string;
    description: string;
    is_active?: boolean;
    create_at?: Date;
}

export class Category {
    constructor(public readonly props: CategoryProperties) {
        this.props.description = this.props.description ?? null;
        this.props.is_active = this.props.is_active ?? true;
        this.props.create_at = this.props.create_at ?? new Date();
    }

    get name(): string {
        return this.props.name;
    }

    get description(): string {
        return this.props.description;
    }

    private set description(value: string) {
        this.props.description = value ?? null;
    }

    get is_active(): boolean {
        return this.is_active;
    }

    private set is_active(value: boolean) {
        this.props.is_active = this.props.is_active ?? true;
    }

    get create_at(): Date | undefined {
        return this.props.create_at;
    }
}
