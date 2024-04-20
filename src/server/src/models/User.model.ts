import { IUser } from '../interfaces';
import SequelizeUser from '../database/models/SequelizeUser.model';

export class UserModel {
    private model = SequelizeUser;

    async findByEmail(email: IUser['email']): Promise<IUser | null> {
        const user = await this.model.findOne({ where: { email } });

        if (!user) return null;
        const { id, password, username, status } = user;
        return { id, email, username, status, password };
    }
}