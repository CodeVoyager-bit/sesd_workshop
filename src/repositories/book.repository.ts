import Book from '../models/book.model';

export class BookRepository {
    async create(data: any) {
        return await Book.create(data);
    }

    async findAll() {
        return await Book.find();
    }

    async findById(id: string) {
        return await Book.findById(id);
    }

    async update(id: string, data: any) {
        return await Book.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await Book.findByIdAndDelete(id);
    }

    async search(query: string) {
        return await Book.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { author: { $regex: query, $options: 'i' } },
                { genre: { $regex: query, $options: 'i' } }
            ]
        });
    }
}
