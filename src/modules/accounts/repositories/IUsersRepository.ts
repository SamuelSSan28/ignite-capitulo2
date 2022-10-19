import { User } from '../entities/User';

interface ICreateUsersDTO {
    name: string;
    email: string;
    password: string;
    driver_license: string;
}

interface IUsersRepository {
    create(data: ICreateUsersDTO): void;
    findById(username: string): Promise<any>;
    findByEmail(email: string): Promise<User>;
    list(): Promise<User[]>;
}

export { IUsersRepository, ICreateUsersDTO };
