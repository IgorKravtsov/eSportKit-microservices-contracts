import { ErrorCodes } from '../enums';
import { BaseExeption, EXCEPTION_TYPE } from './baseException';

export class BadRequestME extends BaseExeption {
  constructor(message: string, data?: any, service?: string, host?: string) {
    super(message, EXCEPTION_TYPE, ErrorCodes.BadRequest, data, service, host);
  }
}
