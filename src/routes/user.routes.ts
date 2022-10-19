import { Router } from 'express';
import multer from 'multer';
import { uploadConfig } from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/controllers/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/controllers/UpdateAvatarController';

const userRoutes = Router();
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const uploadAvatar = multer(uploadConfig('./tmp/avatar'));

userRoutes.post('/', createUserController.handle);

userRoutes.patch(
    '/avatar',
    ensureAuthenticated,
    uploadAvatar.single('avatar'),
    updateUserAvatarController.handle
);

export { userRoutes };
