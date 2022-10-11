import { Category } from '../model/Category';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    findByName(name: string): any;
    list(): Category[];
    create(data:ICreateCategoryDTO): void;
}

export { ICategoryRepository, ICreateCategoryDTO };
