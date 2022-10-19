import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/controllers/CreateUserController';

import { FindAllCategoriesController } from '../modules/cars/controllers/FindAllCategoriesController';

const userRoutes = Router();
const createUserController = new CreateUserController();
const findAllCategoriesController = new FindAllCategoriesController();

userRoutes.post('/', createUserController.handle);

userRoutes.get('/', findAllCategoriesController.handle);
userRoutes.get(
    '/tests',
    ensureAuthenticated,
    findAllCategoriesController.handle
);

export { userRoutes };
