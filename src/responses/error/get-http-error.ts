import { ErrorCodes } from './enums';
import { IErrorResponse, ILogger } from './interfaces';

interface Err {
  message: string;
  type: string;
  code: ErrorCodes;
  data: any;
  service: string;
  host: string;
}

export const getHttpError = (err: Err, logger: ILogger): IErrorResponse => {
  // Means that it is RMQEror
  if (err.type) {
    const devMessage = `[${err.host}]/[${err.service}]: ${err.message} (code: ${err.code})`;
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
