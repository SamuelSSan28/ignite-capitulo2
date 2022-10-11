import { Category } from '../model/Category';
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
    private categories: Category[];

    private static INSTANCE: CategoryRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance() {
        if (!this.INSTANCE) {
            this.INSTANCE = new CategoryRepository();
        }

        return this.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, { name, description, created_at: new Date() });

        this.categories.push(category);
    }

    list() {
        return this.categories;
    }

    findByName(name: string): any {
        const category = this.categories.find(
            (category) => category.name === name
        );

        return category;
    }
}

export { CategoryRepository };
