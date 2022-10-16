import { ICategoryRepository } from '../repositories/ICategoryRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindAllCategoriesService {
    constructor(
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository
    ) {}

    async execute() {
        const allCategoriess = await this.categoryRepository.list();

        return allCategoriess;
    }
}

export { FindAllCategoriesService };
