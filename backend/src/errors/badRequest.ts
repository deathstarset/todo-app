import CustomError from "./index";

export default class BadRequest extends CustomError {
  constructor(public message: string) {
    super(message);
    this.statusCode = 400;
  }
}
