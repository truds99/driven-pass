import httpStatus from "http-status";
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../protocols/index';

function errorHandlerMiddleware(
  err: CustomError, 
  req: Request,
  res: Response,
  next: NextFunction
) {

  if (err.name === 'conflict') {
    res.status(httpStatus.CONFLICT).send(err.message);
  }
  else if (err.name === 'not found') {
    res.status(httpStatus.NOT_FOUND).send(err.message);
  }
  else if (err.name === 'unauthorized') {
    res.status(httpStatus.UNAUTHORIZED).send(err.message);
  }
  else {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }

}

export default errorHandlerMiddleware;
