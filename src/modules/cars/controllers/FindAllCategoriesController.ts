import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';

const categoryRepository = CategoryRepository.getInstance();

class FindAllCategoriesController {
    handle(request: Request, response: Response) {
        return response.json(categoryRepository.list());
    }
}

export { FindAllCategoriesController };
