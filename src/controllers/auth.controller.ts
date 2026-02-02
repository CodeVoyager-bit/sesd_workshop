import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
    authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    register = async (req: Request, res: Response) => {
        try {
            const user = await this.authService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: 'Error registering user' });
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const result = await this.authService.login(req.body.email, req.body.password);
            res.status(200).json(result);
        } catch (error) {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
}
