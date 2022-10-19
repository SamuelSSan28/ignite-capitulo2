import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/UsersRepository';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ message: 'Token missing' });
    }

    const [, token] = authHeader.split(' ');

    const secret = process.env.KEY_JWT as string;

    try {
        const { sub: user_id } = verify(token, secret) as IPayload;
        const userRepository = new UsersRepository();

        const user = userRepository.findById(user_id);

        


    } catch (error) {
        return response.status(401).json({ message: 'Ivalid Token' });
    }

    next();
}
