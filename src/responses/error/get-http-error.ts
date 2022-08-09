import { ErrorCodes } from './enums';
import { MicroserviceException } from './microservice-error';
import { IErrorResponse, ILogger } from './interfaces';

export const getHttpError = (err: MicroserviceException, logger: ILogger): IErrorResponse => {
  if (err.devMessage) {
    logger.debug ? logger.debug(err.devMessage) : logger.error(err.devMessage);
    return { body: { message: err.message, statusCode: err.code }, code: err.code };
  } else {
    logger.error(err.message);
    return {
      body: { message: 'Something went wrong', statusCode: ErrorCodes.InternalError },
      code: ErrorCodes.InternalError
    };
  }
};