import mongoose, { Schema } from 'mongoose';

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: Number, required: true },
    copies: { type: Number, default: 1 }
}, { timestamps: true });

export default mongoose.model('Book', BookSchema);
