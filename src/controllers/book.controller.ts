import { Request, Response } from 'express';
import { BookService } from '../services/book.service';

export class BookController {
    bookService: BookService;

    constructor() {
        this.bookService = new BookService();
    }

    create = async (req: Request, res: Response) => {
        try {
            const book = await this.bookService.createBook(req.body);
            res.status(201).json(book);
        } catch (error) {
            res.status(500).json({ message: 'Error creating book' });
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const search = req.query.search as string;
            const books = await this.bookService.getAllBooks(search);
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: 'Error getting books' });
        }
    }

    getById = async (req: Request, res: Response) => {
        try {
            const book = await this.bookService.getBookById(req.params.id as string);
            if (!book) return res.status(404).json({ message: 'Book not found' });
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ message: 'Error getting book' });
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const book = await this.bookService.updateBook(req.params.id as string, req.body);
            if (!book) return res.status(404).json({ message: 'Book not found' });
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ message: 'Error updating book' });
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            const book = await this.bookService.deleteBook(req.params.id as string);
            if (!book) return res.status(404).json({ message: 'Book not found' });
            res.status(200).json({ message: 'Book deleted' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting book' });
        }
    }
}
