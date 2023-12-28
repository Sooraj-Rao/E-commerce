import express from "express";
import cors from "cors";
import { router as userRouter } from "./src/Routes/User/Route.js";
import { Connect } from "./src/DB/Connect.js";
const app = express();

Connect();
app.use(express.json());
app.use(cors());
app.use(userRouter);

app.listen(3000, () => console.log("Server Started"));
