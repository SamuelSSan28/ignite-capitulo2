import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const categoryRepository = new CategoryRepository();

        const { name, description } = request.body;

        const createCategoryService = new CreateCategoryService(
            categoryRepository
        );

        try {
            await createCategoryService.execute({ name, description });
        } catch (error: any) {
            return response.status(400).json({ error });
        }

        return response.status(201).send();
    }
}

export { CreateCategoryController };
