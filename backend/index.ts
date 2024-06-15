import express, {Application, json, Request, Response} from "express";
import {userRouter} from "./routers/userRouter";
const cors = require("cors");

const app: Application = express();

app.use(json());
app.use(cors());

app.use("/api", userRouter);

app.listen(3004, () => {
    console.log("Successfully started server");
})