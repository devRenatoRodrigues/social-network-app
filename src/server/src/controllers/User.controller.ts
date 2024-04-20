import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP.util';
import { UserService } from '../service';
import { UserStatus } from '../interfaces';

export class UserController {
    constructor(
        private userService = new UserService(),
    ) { }

    public async login(req: Request, res: Response): Promise<Response> {
        const serviceResponse = await this.userService.login(req.body);
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    };

    public async updateStatus(req: Request, res: Response): Promise<Response> {
        const id = Number(req.body.payload.id);
        const serviceResponse = await this.userService.updateStatus(id, req.body.status);
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    };

    public async findByStatus(req: Request, res: Response): Promise<Response> {
        const statusKey = req.params.status.toLocaleUpperCase() as keyof typeof UserStatus;
        const status = UserStatus[statusKey];
        const serviceResponse = await this.userService.findByStatus(status);
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    };

}