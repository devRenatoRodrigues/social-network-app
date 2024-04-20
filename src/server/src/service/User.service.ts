import { UserModel } from '../models';
import { IToken, ILogin, IUser, ServiceResponse, ServiceMessage, IUserStatusResponse } from '../interfaces/';
import JwtService from '../utils/JWT.util';
import { log } from 'console';

export class UserService {
    constructor(
        private _userModel = new UserModel(),
        private _jwtService = JwtService,
    ) { }

    public async login(data: ILogin): Promise<ServiceResponse<ServiceMessage | IToken>> {
        const user = await this._userModel.findByEmail(data.email);
        if (user && user.password === data.password) {
            const { id, email } = user as IUser;
            const token = this._jwtService.sign({ id, email });
            return { status: 'SUCCESSFUL', data: { token } };
        }
        return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    public async updateStatus(id: IUser['id'], status: IUser['status']): Promise<ServiceResponse<ServiceMessage | IUserStatusResponse>> {
        const updatedUser = await this._userModel.updateStatus(id, status);
        if (!updatedUser) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
        return { status: 'SUCCESSFUL', data: updatedUser };
    }

    public async findByStatus(status: IUser['status']): Promise<ServiceResponse<ServiceMessage | IUserStatusResponse[]>> {
        log('service', status);
        const users = await this._userModel.findByStatus(status);
        if (!users) return { status: 'NOT_FOUND', data: { message: 'No users found' } };
        return { status: 'SUCCESSFUL', data: users };
    }

}