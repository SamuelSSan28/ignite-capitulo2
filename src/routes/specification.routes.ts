import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/controllers/CreateSpecificationController';
import { FindAllSpecificationController } from '../modules/cars/controllers/FindAlSpecificationsController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const findAllSpecificationController = new FindAllSpecificationController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', findAllSpecificationController.handle);

export { specificationsRoutes };
