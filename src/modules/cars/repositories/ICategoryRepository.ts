import { Category } from '../model/Category';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryepository {
    findByName(name: string): any;
    list(): Category[];
    create(data:ICreateCategoryDTO): void;
}

export { ICategoryepository, ICreateCategoryDTO };
