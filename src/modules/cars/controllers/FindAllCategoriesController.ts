import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';

class FindAllCategoriesController {
    handle(request: Request, response: Response) {
        const categoryRepository = CategoryRepository.getInstance();

        return response.json(categoryRepository.list());
    }
}

export { FindAllCategoriesController };
