import express, { Request, Response } from "express";
import env from "./config/env";
import cors from "cors";
import morgan from "morgan";
import apiV1Routes from "./api/v1";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", apiV1Routes);


app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "success",
  });
});



app.listen(env.PORT, () => {
  console.log("server listening on 8000");
});
