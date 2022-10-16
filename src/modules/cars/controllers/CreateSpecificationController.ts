import { Request, Response } from 'express';
import { SpecificationRepository } from '../repositories/SpecificationRepository';
import { CreateSpecificationService } from '../services/CreateSpecificationService';

class CreateSpecificationController {
    handle(request: Request, response: Response) {
        const specificationRepository = SpecificationRepository.getInstance();

        const { name, description } = request.body;

        const createSpecificationService = new CreateSpecificationService(
            specificationRepository
        );

        createSpecificationService.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateSpecificationController };
