import "dotenv/config";
import express from "express";
import { dbConnect } from "./db/connect";
import router from "./routes/index";
import errorHandler from "./middlewares/errorHandler";
const app = express();

app.use(express.json());
app.use("/api/v1", router());
app.use(errorHandler);
const start = async (uri: string) => {
  try {
    await dbConnect(uri);
    console.log("Connected To Database");

    app.listen(8080, () => {
      console.log("Server listening on port 8080....");
    });
  } catch (error) {
    console.log(error);
  }
};

start(process.env.MONGO_URI);
