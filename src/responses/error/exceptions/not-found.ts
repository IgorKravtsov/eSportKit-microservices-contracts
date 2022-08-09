import { ErrorCodes } from '../enums';
import { EXCEPTION_TYPE, MicroserviceException } from '../microservice-error';

export class NotFoundME extends MicroserviceException {
  constructor(message: string, data?: any) {
    super(message, EXCEPTION_TYPE, ErrorCodes.NotFound, data);
  }
}
