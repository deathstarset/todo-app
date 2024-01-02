import express from "express";
type ControllerFunction = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void;
export default (fn: ControllerFunction) => {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
