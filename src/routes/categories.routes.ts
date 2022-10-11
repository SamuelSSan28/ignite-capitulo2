import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/controllers/CreateCategoryController';
import { FindAllCategoriesController } from '../modules/cars/controllers/FindAllCategoriesController';
import { ImportCategoryController } from '../modules/cars/controllers/ImportCategoriesController';

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const findAllCategoriesController = new FindAllCategoriesController();
const importCategoryController = new ImportCategoryController();

const upload = multer({ dest: './tmp/' });

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', findAllCategoriesController.handle);

categoriesRoutes.post(
    '/import',
    upload.single('file'),
    importCategoryController.handle
);

export { categoriesRoutes };
