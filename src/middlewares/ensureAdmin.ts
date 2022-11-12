import { NextFunction, Request, Response } from 'express';
import { UsersRepository } from '../modules/accounts/repositories/UsersRepository';

export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const user_id = request.user.id;

    const userRepository = new UsersRepository();

    const user = await userRepository.findById(user_id);

    if (user.isAdmin)
        return response.status(401).json({ message: 'User isnt admin!' });

    next();
}
