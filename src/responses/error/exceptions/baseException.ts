import { ErrorCodes } from '../enums';
import { IRMQErr } from '../interfaces';

export const EXCEPTION_TYPE = 'ME-RMQ-Exception';

export class BaseExeption extends Error implements IRMQErr {
  message: string;
  type: string;
  code: ErrorCodes;
  data?: any;
  service?: string | undefined;
  host?: string | undefined;

  constructor(message: string, type: any, code: ErrorCodes, data?: any, service?: string, host?: string) {
    super(message);
  }
}
