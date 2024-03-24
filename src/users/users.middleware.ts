import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { name, email, role } = req.body;
    const validRoles = ['ADMIN', 'INTERN', 'ENGINEER'];
    if (!name || !email) {
      return res.status(403).json({ message: 'Name and Email are required' });
    }

    if (!validRoles.includes(role)) {
      return res.status(403).json({ message: 'Invalid role' });
    }
    next();
  }
}
