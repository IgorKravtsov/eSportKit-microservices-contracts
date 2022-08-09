import { ErrorCodes } from './enums';
import { IRMQErr, IErrorResponse, ILogger } from './interfaces';

export const getHttpError = (err: IRMQErr, logger: ILogger): IErrorResponse => {
  // Means that it is RMQError
  if (err.type) {
    const devMessage = `[${err.host}/${err.service}]: ${err.message} (code: ${err.code})`;
    logger.debug ? logger.debug(devMessage) : logger.error(devMessage);
    return { body: { message: err.message, statusCode: err.code }, code: err.code };
  } else {
    logger.error(err.message);
    return {
      body: { message: 'Something went wrong', statusCode: ErrorCodes.InternalError },
      code: ErrorCodes.InternalError
    };
  }
};
