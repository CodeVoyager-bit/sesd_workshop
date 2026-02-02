import User from '../models/user.model';

export class UserRepository {
    async create(data: any) {
        return await User.create(data);
    }

    async findByEmail(email: string) {
        return await User.findOne({ email });
    }

    async findAll() {
        return await User.find();
    }
}
