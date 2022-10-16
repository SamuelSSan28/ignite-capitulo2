import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';

class FindAllCategoriesController {
    async handle(request: Request, response: Response) {
        const categoryRepository = new CategoryRepository();

        const categories = await categoryRepository.list();

        return response.json(categories);
    }
}

export { FindAllCategoriesController };
