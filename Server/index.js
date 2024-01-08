import express from "express";
import cors from "cors";
import { router as userRouter } from "./src/Routes/User/Route.js";
import { router as adminRouter } from "./src/Routes/Admin/Route.js";
import { Connect } from "./src/DB/Connect.js";
import cookieParser from "cookie-parser";

const app = express();

Connect();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use(userRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => console.log("Server Started"));
