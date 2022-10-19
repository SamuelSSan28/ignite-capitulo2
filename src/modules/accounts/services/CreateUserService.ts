import {
    ICreateUsersDTO,
    IUsersRepository,
} from '../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import { hashPasswordMD5 } from '../../../utils/ComparePassword';
import AppError from '../../../errors/AppError';

@injectable()
class CreateUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUsersRepository
    ) {}

    async execute({ name, password, email, driver_license }: ICreateUsersDTO) {
        const userAlredyExists = await this.userRepository.findByEmail(
            email
        );

        const passwordHash = hashPasswordMD5(password)

        if (userAlredyExists) {
            throw new AppError('User Alredy Exists!');
        }

        this.userRepository.create({
            name,
            password:passwordHash,
            email,
            driver_license
        });
    }
}

export { CreateUserService };
