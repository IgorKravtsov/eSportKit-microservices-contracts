import { ErrorCodes } from '../enums';
import {} from '../microservice-error';
import { BaseExeption, EXCEPTION_TYPE } from './baseException';

export class NotFoundME extends BaseExeption {
  constructor(message: string, data?: any, service?: string, host?: string) {
    super(message, EXCEPTION_TYPE, ErrorCodes.NotFound, data, service, host);
  }
}
