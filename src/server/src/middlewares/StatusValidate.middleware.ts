import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP.util';
import { UserStatus } from '../interfaces';

export async function validateStatus(req: Request, res: Response, next: NextFunction): Promise<unknown> {
    const status = req.body.status;

    if (!Object.values(UserStatus).includes(status)) {
        return res.status(mapStatusHTTP('INVALID_DATA')).json({ error: 'Invalid status' });
    }

    next();
}