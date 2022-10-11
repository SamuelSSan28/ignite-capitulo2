import { Router } from 'express';
import { CreateCategoryController } from '../modules/cars/controllers/CreateCategoryController';
import { FindAllCategoriesController } from '../modules/cars/controllers/FindAllCategoriesController';

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const findAllCategoriesController = new FindAllCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', findAllCategoriesController.handle);

export { categoriesRoutes };
