import express from "express";
import { todoModel } from "../models/todo";
import asyncMiddleware from "../middlewares/async";
import NotFoundError from "../errors/notFound";
import BadRequest from "../errors/badRequest";

export const getTodos = asyncMiddleware(
  async (req: express.Request, res: express.Response) => {
    const todos = await todoModel.find();
    res.status(200).json({ todos });
  }
);

export const getTodo = asyncMiddleware(
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { todoID } = req.params;
    const todo = await todoModel.findById(todoID);
    if (!todo) {
      return next(new NotFoundError("Todo Not Found"));
    }

    res.status(200).json({ todo });
  }
);

/*
export const getTodo = async (req: express.Request, res: express.Response) => {
  try {
    const { todoID } = req.params;
    const todo = await todoModel.findById(todoID);
    if (!todo) {
      return res.status(400).json({ msg: "an error" });
    }
    return res.status(200).json({ todo });
  } catch (err) {
    return res.status(400).json({ err });
  }
};
*/
export const deleteTodo = asyncMiddleware(
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { todoID } = req.params;
    const todo = await todoModel.findByIdAndDelete(todoID);
    if (!todo) {
      return next(new NotFoundError("Todo Not Found"));
    }
    res.status(200).json({ msg: "Todo Deleted", todo });
  }
);

export const updateTodo = asyncMiddleware(
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { title, description } = req.body;
    const { todoID } = req.params;
    const todo = await todoModel.findByIdAndUpdate(
      todoID,
      { title, description },
      { new: true }
    );
    if (!todo) {
      return next(new NotFoundError("Todo Not Found"));
    }
    res.status(201).json({ msg: "Todo Updated", todo });
  }
);

export const createTodo = asyncMiddleware(
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { title, description } = req.body;
    if (!title || !description) {
      return next(new BadRequest("More Info Needs To Be Provided"));
    }
    const todo = await todoModel.create({ title, description });
    res.status(201).json({ msg: "Todo Created", todo });
  }
);
