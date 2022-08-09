import { ErrorCodes } from './enums';
import { IErrorResponse, ILogger, IRMQErr } from './interfaces';

export const EXCEPTION_TYPE = 'ME-RMQ-Exception';

export class MicroserviceException extends Error implements IRMQErr {
  public devMessage: string;
  public code: ErrorCodes;
  public message: string;
  public data?: any;
  public service?: string;
  public host?: string;
  public type = EXCEPTION_TYPE;

  constructor(message: string, type: any, code: ErrorCodes, data?: any, service?: string, host?: string) {
    super(message, type, code, data, service, host);
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
