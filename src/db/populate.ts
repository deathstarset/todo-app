import { todoModel } from "../models/todo";
import data from "../../data.json";

export const populate = () => {
  todoModel.insertMany(data.todos);
};
