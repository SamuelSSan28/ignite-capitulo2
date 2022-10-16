import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryService } from '../services/CreateCategoryService';

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const createCategoryService = container.resolve(CreateCategoryService);

        try {
            await createCategoryService.execute({ name, description });
        } catch (error: any) {
            return response.status(400).json({ error });
        }

        return response.status(201).send();
    }
}

export { CreateCategoryController };
