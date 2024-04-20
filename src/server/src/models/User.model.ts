import { IUser, IUserStatusResponse } from '../interfaces';
import SequelizeUser from '../database/models/SequelizeUser.model';

export class UserModel {
    private model = SequelizeUser;

    async findByEmail(email: IUser['email']): Promise<IUser | null> {
        const user = await this.model.findOne({ where: { email } });

        if (!user) return null;
        const { id, password, username, status } = user;
        return { id, email, username, status, password };
    }

    async updateStatus(id: IUser['id'], status: IUser['status']): Promise<IUserStatusResponse | null> {
        const [updatedRows] = await this.model.update({ status }, { where: { id } });

        if (updatedRows === 0) return null;
        const user = await this.model.findByPk(id);
        if (!user) return null;
        const { username } = user;
        return { username, status };
    }

    async findByStatus(status: IUser['status']): Promise<IUserStatusResponse[] | null> {
        const users = await this.model.findAll({ where: { status } });
        if (!users) return null;
        return users.map(user => {
            const { email, username, status } = user;
            return { email, username, status };
        });
    }

}