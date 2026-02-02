import { BookRepository } from '../repositories/book.repository';

export class BookService {
    bookRepository: BookRepository;

    constructor() {
        this.bookRepository = new BookRepository();
    }

    async createBook(data: any) {
        return await this.bookRepository.create(data);
    }

    async getAllBooks(searchQuery: string) {
        if (searchQuery) {
            return await this.bookRepository.search(searchQuery);
        }
        return await this.bookRepository.findAll();
    }

    async getBookById(id: string) {
        return await this.bookRepository.findById(id);
    }

    async updateBook(id: string, data: any) {
        return await this.bookRepository.update(id, data);
    }

    async deleteBook(id: string) {
        return await this.bookRepository.delete(id);
    }
}
