import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { IUsersRepository, ICreateUsersDTO } from './IUsersRepository';

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, password, email, driver_license }: ICreateUsersDTO) {
        const user = this.repository.create({
            name,
            password,
            email,
            driver_license,
        });

        await this.repository.save(user);
    }

    async list() {
        const users = await this.repository.find();

        return users;
    }

    async findByEmail(email: string) {
        const user = (await this.repository.findOne({ email })) as User;

        return user;
    }

    async findById(id: string): Promise<any> {
        const user = await this.repository.findOne({ id });

        return user;
    }
}

export { UsersRepository };
