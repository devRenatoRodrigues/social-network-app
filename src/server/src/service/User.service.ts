import { UserModel } from '../models';
import { IToken, ILogin, IUser, ServiceResponse, ServiceMessage } from '../interfaces/';
import JwtService from '../utils/JWT.util';

export class UserService {
    constructor(
        private _userModel = new UserModel(),
        private _jwtService = JwtService,
    ) { }

    public async login(data: ILogin): Promise<ServiceResponse<ServiceMessage | IToken>> {
        const user = await this._userModel.findByEmail(data.email);
        if (user && user.password === data.password) {
            const { email } = user as IUser;
            const token = this._jwtService.sign({ email });
            return { status: 'SUCCESSFUL', data: { token } };
        }
        return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
}