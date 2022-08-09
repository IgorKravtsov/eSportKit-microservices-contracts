import { ErrorCode } from './enums';
import { IErrorResponse, ILogger, IRMQErr } from './interfaces';

export class MicroserviceException extends Error {
  public devMessage: string;
  public code: ErrorCode;
  public message: string;
  // public data?: any;
  // public service?: string;
  // public host?: string;
  // public type = EXCEPTION_TYPE;

  constructor(message: string) {
    super(message);
    // this.code = code;
    // this.type = type;
    // this.data = data;
    // this.service = service;
    // this.host = host;

    // this.devMessage = `[${host}]/[${service}]: ${message} (code: ${code})`;
  }

  /*
   * @deprecated because it is impossible to use this class with nestjs-rmq lib
   */
  getHttpError(err: Error, logger?: ILogger): IErrorResponse {
    if (err instanceof MicroserviceException) {
      logger?.debug ? logger?.debug(err.devMessage) : logger?.error(err.devMessage);
      return { body: { message: err.message, statusCode: err.code }, code: err.code };
    } else {
      logger?.error(err.message);
      return {
        body: { message: 'Something went wrong', statusCode: ErrorCode.InternalError },
        code: ErrorCode.InternalError
      };
    }
  }
}
