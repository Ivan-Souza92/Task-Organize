import { Request, Response } from 'express';
import ResponseNotFound from '../responses/ResponseNotFound';

function notFoundErrorMiddleware(req: Request, res: Response) {
  return ResponseNotFound(res);
}

export default notFoundErrorMiddleware;
