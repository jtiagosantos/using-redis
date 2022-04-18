import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.get('/users/index', UserController.getAllUsers);
router.post('/user/new', UserController.createNewUser);

export { router };