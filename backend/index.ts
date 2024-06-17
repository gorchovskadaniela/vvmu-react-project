import express, {Application, json, Request, Response} from "express";
import {userRouter} from "./routers/userRouter";
import newsRouter from "./routers/newsRouter";

const cors = require("cors");

const app: Application = express();

app.use(json());
app.use(cors());

app.use("/api", newsRouter);

app.listen(3070, () => {
    console.log("Server started successfully :)");
})
