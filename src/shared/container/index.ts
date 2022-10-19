import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/accounts/repositories/UsersRepository';
import { CategoryRepository } from '../../modules/cars/repositories/CategoryRepository';
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/SpecificationRepository';

container.registerSingleton<ICategoryRepository>(
    'CategoryRepository',
    CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
    'SpecificationRepository',
    SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
    'UserRepository',
    UsersRepository
);