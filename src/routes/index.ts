import express from "express";
import todosRouter from "./todos";
const router = express.Router();

export default (): express.Router => {
  todosRouter(router);
  return router;
};
