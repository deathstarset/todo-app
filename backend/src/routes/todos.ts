import {
  getTodos,
  getTodo,
  deleteTodo,
  updateTodo,
  createTodo,
} from "../controllers/todo";
import express from "express";

export default (router: express.Router) => {
  router.get("/todos", getTodos);
  router.get("/todos/:todoID", getTodo);
  router.delete("/todos/:todoID", deleteTodo);
  router.patch("/todos/:todoID", updateTodo);
  router.post("/todos", createTodo);
};
