import { Router } from 'express';
import { BookController } from '../controllers/book.controller';
import { authenticateToken, isAdmin } from '../middlewares/auth.middleware';

export class BookRoutes {
    public router: Router;
    public bookController: BookController;

    constructor() {
        this.router = Router();
        this.bookController = new BookController();
        this.routes();
    }

    routes() {
        this.router.get('/', this.bookController.getAll);
        this.router.get('/:id', this.bookController.getById);
        this.router.post('/', authenticateToken, isAdmin, this.bookController.create);
        this.router.put('/:id', authenticateToken, isAdmin, this.bookController.update);
        this.router.delete('/:id', authenticateToken, isAdmin, this.bookController.delete);
    }
}
