import { NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import IdInvalidException from '../errors/IdInvalidException';

class ValidationService {
  public validateId(id: string, next: NextFunction): boolean {
    if (!isValidObjectId(id)) {
      next(new IdInvalidException());
      return true;
    }
    return false;
  }
}

export default new ValidationService();
