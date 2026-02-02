import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { BookRoutes } from './routes/book.routes';
import { AuthRoutes } from './routes/auth.routes';

class App {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.connectDatabase();
        this.initializeRoutes();
    }

    private initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private initializeRoutes() {
        const bookRoutes = new BookRoutes();
        const authRoutes = new AuthRoutes();

        this.app.use('/api/books', bookRoutes.router);
        this.app.use('/api/auth', authRoutes.router);
    }

    private connectDatabase() {
        mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/library_system')
            .then(() => console.log('Database connected'))
            .catch((error) => console.log('Database error', error));
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default App;
