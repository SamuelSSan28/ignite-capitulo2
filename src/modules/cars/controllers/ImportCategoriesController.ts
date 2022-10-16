import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';
import { ImportCategoryService } from '../services/ImportCategoryService';

class ImportCategoryController {
    handle(request: Request, response: Response) {
        const categoryRepository = new CategoryRepository();

        const { file } = request;

        if (!file) {
            throw new Error('Arquivo não foi enviado!');
        }

        const importCategoryService = new ImportCategoryService(
            categoryRepository
        );
        try {
            importCategoryService.execute(file);
        } catch (error) {
            return response.status(400).json({error});

        }

        return response.status(201).send();
    }
}

export { ImportCategoryController };
