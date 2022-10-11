import { Request, Response } from 'express';
import { SpecificationRepository } from '../repositories/SpecificationRepository';

const specificaitionRepository = SpecificationRepository.getInstance();

class FindAllSpecificationController {
    handle(request: Request, response: Response) {
        return response.json(specificaitionRepository.list());
    }
}

export { FindAllSpecificationController };
