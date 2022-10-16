import { Category } from '../entities/Category';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    findByName(name: string): Promise<any>;
    list():Promise<Category[]>;
    create(data:ICreateCategoryDTO): Promise<void>;
}

export { ICategoryRepository, ICreateCategoryDTO };
