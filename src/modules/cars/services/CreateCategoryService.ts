import { ICategoryRepository } from '../repositories/ICategoryRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute({ name, description }: IRequest) {
        const categoryAlredyExists = await this.categoryRepository.findByName(name);

        if (categoryAlredyExists) {
            throw new Error('Category Alredy Exists!');
        }

        this.categoryRepository.create({ name, description });
    }
}

export {CreateCategoryService}
