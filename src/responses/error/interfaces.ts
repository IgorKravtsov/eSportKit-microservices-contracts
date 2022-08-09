import { ErrorCodes } from './enums';

export interface IErrorResponse {
  body: {
    message: string;
    statusCode: ErrorCodes;
  };
  code: ErrorCodes;
}

export interface ILogger {
  log(message: any, ...optionalParams: any[]): any;
  error(message: any, ...optionalParams: any[]): any;
  warn(message: any, ...optionalParams: any[]): any;
  debug?(message: any, ...optionalParams: any[]): any;
  verbose?(message: any, ...optionalParams: any[]): any;
}

export interface IRMQErr {
  message: string;
  type: string;
  code: ErrorCodes;
  data: any;
  service: string;
  host: string;
}
