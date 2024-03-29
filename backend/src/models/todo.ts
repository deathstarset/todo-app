import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title Not Found"],
  },
  description: {
    type: String,
    required: [true, "Description Not Found"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const todoModel = mongoose.model("Todo", todoSchema);
