import mongoose from "mongoose";

export const dbConnect = (uri: string) => {
  return mongoose.connect(uri);
};
