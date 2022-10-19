import { IUsersRepository } from '../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { deleteFile } from '../../../utils/File';

interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUserAvatarService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUsersRepository
    ) {}

    async execute({ user_id, avatar_file }: IRequest) {
        const user = await this.userRepository.findById(user_id);

        if (user.avatar) await deleteFile(`./tmp/avatar/${user.avatar}`);

        user.avatar = avatar_file;

        await this.userRepository.create(user);
    }
}

export { UpdateUserAvatarService };
