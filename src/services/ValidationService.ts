import { NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';

class ValidationService {
  public validateId(id: string): boolean {
    if (!isValidObjectId(id)) {
      return true;
    }
    return false;
  }
}

export default new ValidationService();
