import { Router } from 'express';
import { usersController } from '../controllers/usersController';
import authMiddleware from '../middlewares/authMiddleware';

class UsersRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.use(authMiddleware); //Autenticacion para manejar estas rutas.

        this.router.get('/list', usersController.getAllUsers);
        this.router.get('/listOne/:id', usersController.getUserById);
        this.router.post('/createUser', usersController.createUser);
        this.router.put('/updateUser/:id', usersController.updateUser);
        this.router.delete('/deleteUser/:id', usersController.deleteUser);
        this.router.put('/disabledUser/:id', usersController.disabledUser);
        this.router.put('/enabledUser/:id', usersController.enabledUser);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;
