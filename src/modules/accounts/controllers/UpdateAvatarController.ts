import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { UpdateUserAvatarService } from '../services/UpdateUserAvatarService';

class UpdateUserAvatarController {
    async handle(request: Request, response: Response) {
        const avatar_file = request.file?.filename as string;
        const user_id = request.user.id;

        if (!avatar_file) {
            throw new AppError('Arquivo não foi enviado!');
        }

        const updateUserAvatarService = container.resolve(
            UpdateUserAvatarService
        );

        await updateUserAvatarService.execute({ user_id, avatar_file });

        return response.status(201).send();
    }
}

export { UpdateUserAvatarController };
