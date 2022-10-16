import { Request, Response } from 'express';
import { FindAllCategoriesService } from '../services/FindAllCategoriesService';
import { container } from 'tsyringe';

class FindAllCategoriesController {
    async handle(request: Request, response: Response) {
        const findAllCategoriesService = container.resolve(
            FindAllCategoriesService
        );

        const allCategories = await findAllCategoriesService.execute();

        return response.json(allCategories);
    }
}

export { FindAllCategoriesController };
