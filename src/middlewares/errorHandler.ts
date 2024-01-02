import express from "express";
import { MongooseError } from "mongoose";
import CustomError from "../errors/index";
type CustomErrorType = {
  message: string;
  statusCode: number;
};
export default (
  error: CustomErrorType,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (error instanceof CustomError) {
    res.status(error.statusCode).json({ msg: error.message });
  } else if (error instanceof MongooseError) {
    res.status(500).json({ msg: error.message });
  }
};
