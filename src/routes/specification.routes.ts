import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/controllers/CreateSpecificationController';
import { FindAllSpecificationsController } from '../modules/cars/controllers/FindAllSpecificationsController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const findAllSpecificationController = new FindAllSpecificationsController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', findAllSpecificationController.handle);

export { specificationsRoutes };
