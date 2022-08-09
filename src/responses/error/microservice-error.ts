import { ErrorCodes } from './enums';
import { IErrorResponse, ILogger } from './interfaces';

export class MicroserviceException extends Error {
  public devMessage: string;
  public code: ErrorCodes;
  public message: string;
  public data?: any;
  public service?: string;
  public host?: string;
  public type?: any;

  constructor(message: string, type: any, code: ErrorCodes, data?: any, service?: string, host?: string) {
    super(message);
    this.code = code;
    this.type = type;
    this.data = data;
    this.service = service;
    this.host = host;

    this.devMessage = `[${host}]/[${service}]: ${message} (code: ${code})`;
  }

  getHttpError(err: MicroserviceException, logger?: ILogger): IErrorResponse {
    if (err.devMessage) {
      logger?.debug ? logger?.debug(err.devMessage) : logger?.error(err.devMessage);
      return { body: { message: err.message, statusCode: err.code }, code: err.code };
    } else {
      logger?.error(err.message);
      return {
        body: { message: 'Something went wrong', statusCode: ErrorCodes.InternalError },
        code: ErrorCodes.InternalError
      };
    }
  }
}
