import { Request, Response } from 'express';
import { FindAllSpecificationsService } from '../services/FindAllSpecificationsService';
import { container } from 'tsyringe';

class FindAllSpecificationsController {
    async handle(request: Request, response: Response) {
        const findAllSpecificationsService = container.resolve(
            FindAllSpecificationsService
        );

        const allSpecifications = await findAllSpecificationsService.execute();

        return response.json(allSpecifications);
    }
}

export { FindAllSpecificationsController };
