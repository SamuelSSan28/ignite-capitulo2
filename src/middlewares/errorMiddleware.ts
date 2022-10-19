import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';

export default function errorMiddleware(
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction
) {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json(err.message);
    }

    return response
        .status(500)
        .json({ message: `Internal Server Error - ${err.message}` });
}
