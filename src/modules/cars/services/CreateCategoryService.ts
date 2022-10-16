import { ICategoryRepository } from '../repositories/ICategoryRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryService {
    constructor(
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository
    ) {}

    async execute({ name, description }: IRequest) {
        const categoryAlredyExists = await this.categoryRepository.findByName(
            name
        );

        if (categoryAlredyExists) {
            throw new Error('Category Alredy Exists!');
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryService };
