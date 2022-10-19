import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { password, email } = request.body;

        let jwt = null;

        const authenticateUserService = container.resolve(
            AuthenticateUserService
        );

        jwt = await authenticateUserService.execute({
            password,
            email,
        });

        return response.status(200).json(jwt).send();
    }
}

export { AuthenticateUserController };
