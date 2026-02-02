import { UserRepository } from '../repositories/user.repository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthService {
    userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(data: any) {
        const existing = await this.userRepository.findByEmail(data.email);
        if (existing) throw new Error('User already exists');

        const hashedPassword = await bcrypt.hash(data.password, 10);
        return await this.userRepository.create({ ...data, password: hashedPassword });
    }

    async login(email: string, password: string) {
        const user: any = await this.userRepository.findByEmail(email);
        if (!user) throw new Error('Invalid credentials');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
        return { token, user: { name: user.name, email: user.email, role: user.role } };
    }
}
