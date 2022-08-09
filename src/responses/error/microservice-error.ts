import { ErrorCodes } from './enums';

export class MicroserviceException extends Error {
  devMessage: string;
  code: ErrorCodes;

  constructor(message: string, devMessage: string, code: ErrorCodes) {
    super(message);
    this.devMessage = devMessage;
    this.code = code;
  }
}
