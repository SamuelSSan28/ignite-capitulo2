import { IUsersRepository } from '../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import { comparePassword } from '../../../utils/ComparePassword';
import { sign } from 'jsonwebtoken';
import AppError from '../../../errors/AppError';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: { email: string; name: string };
    token: string;
}

@injectable()
class AuthenticateUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUsersRepository
    ) {}

    async execute({ password, email }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Email or Password is invalid!');
        }

        if (!comparePassword(password, user.password)) {
            throw new AppError('Email or Password is invalid!');
        }

        const secret = process.env.KEY_JWT ? process.env.KEY_JWT : 'itsok';

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn: '1d',
        });
        const filteredUserInfo = { email: user.email, name: user.name };

        return { user: filteredUserInfo, token };
    }
}

export { AuthenticateUserService };
