import CustomError from "./index";

export default class NotFoundError extends CustomError {
  constructor(public message: string) {
    super(message);
    this.statusCode = 404;
  }
}
