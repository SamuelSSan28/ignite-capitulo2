import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCarService } from '../services/CreateCarService';

class CreateCarController {
    async handle(request: Request, response: Response) {
        const {
            name,
            description,
            daily_rate,
            licence_plate,
            fine_amount,
            brand,
            category_id,
        } = request.body;

        const createCarService = container.resolve(CreateCarService);

        try {
            await createCarService.execute({
                name,
                description,
                daily_rate,
                licence_plate,
                fine_amount,
                brand,
                category_id,
            });
        } catch (error: any) {
            return response.status(400).json({ error });
        }

        return response.status(201).send();
    }
}

export { CreateCarController };
