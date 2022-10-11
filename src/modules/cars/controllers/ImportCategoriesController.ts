import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';
import { ImportCategoryService } from '../services/ImportCategoryService';

const categoryRepository = CategoryRepository.getInstance();

class ImportCategoryController {
    
    handle(request: Request, response: Response) {
        const { file } = request;

        if (!file) {
            throw new Error('Arquivo não foi enviado!');
        }

        const importCategoryService = new ImportCategoryService(
            categoryRepository
        );

        importCategoryService.execute(file);

        return response.status(201).send();
    }
}

export { ImportCategoryController };
