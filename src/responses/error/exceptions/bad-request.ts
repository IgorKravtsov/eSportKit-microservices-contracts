import { ErrorCodes } from '../enums';
import { EXCEPTION_TYPE, MicroserviceException } from '../microservice-error';

export class BadRequestME extends MicroserviceException {
  constructor(message: string, data?: any) {
    super(message, EXCEPTION_TYPE, ErrorCodes.BadRequest, data);
  }
}
