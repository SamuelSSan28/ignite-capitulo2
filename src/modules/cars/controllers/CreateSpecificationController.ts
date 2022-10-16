import { Request, Response } from 'express';
import { SpecificationRepository } from '../repositories/SpecificationRepository';
import { CreateSpecificationService } from '../services/CreateSpecificationService';
import { container } from 'tsyringe';

class CreateSpecificationController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const createSpecificationService = container.resolve(
            CreateSpecificationService
        );

        try {
            await createSpecificationService.execute({ name, description });
        } catch (error) {
            return response.status(400).json({ error }).send();
        }

        return response.status(201).send();
    }
}

export { CreateSpecificationController };
