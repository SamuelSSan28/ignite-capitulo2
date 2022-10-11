import { Request, Response } from 'express';
import { SpecificationRepository } from '../repositories/SpecificationRepository';

class FindAllSpecificationController {
    handle(request: Request, response: Response) {
        const specificaitionRepository = SpecificationRepository.getInstance();

        return response.json(specificaitionRepository.list());
    }
}

export { FindAllSpecificationController };
