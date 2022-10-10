import { Category } from '../model/Category';
import { ICategoryepository, ICreateCategoryDTO } from './ICategoryRepository';

class CategoryRepository implements ICategoryepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
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

        return category ;
    }
}

export { CategoryRepository };
