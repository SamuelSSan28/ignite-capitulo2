import { ICategoryRepository } from '../repositories/ICategoryRepository';
import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';

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
            throw new AppError('Category Alredy Exists!');
        }

        await this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryService };
