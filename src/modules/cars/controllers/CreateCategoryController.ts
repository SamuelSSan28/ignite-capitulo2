import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';


const categoryRepository = CategoryRepository.getInstance();

class CreateCategoryController {
    handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const createCategoryService = new CreateCategoryService(
            categoryRepository
        );

        createCategoryService.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController };
