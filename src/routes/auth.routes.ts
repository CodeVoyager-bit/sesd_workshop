import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

export class AuthRoutes {
    public router: Router;
    public authController: AuthController;

    constructor() {
        this.router = Router();
        this.authController = new AuthController();
        this.routes();
    }

    routes() {
        this.router.post('/register', this.authController.register);
        this.router.post('/login', this.authController.login);
    }
}
