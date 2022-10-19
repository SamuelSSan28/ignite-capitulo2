import { Request, Response } from 'express';
import { ImportCategoryService } from '../services/ImportCategoryService';
import { container } from 'tsyringe';
import AppError from '../../../errors/AppError';


class ImportCategoryController {
    handle(request: Request, response: Response) {
        const { file } = request;

        if (!file) {
            throw new AppError('Arquivo não foi enviado!');
        }

        const importCategoryService = container.resolve(ImportCategoryService);
        try {
            importCategoryService.execute(file);
        } catch (error) {
            return response.status(400).json({ error });
        }

        return response.status(201).send();
    }
}

export { ImportCategoryController };
