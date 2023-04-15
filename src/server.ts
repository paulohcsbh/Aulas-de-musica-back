import express from 'express';
import userRouter from './routes/user-router';
import helloRouter from './routes/hello-router';
import sessionRouter from './routes/session-route';
import dotenv from "dotenv";
dotenv.config();

const app = express();
app
    .use(express.json())
    .use("/hello", helloRouter)
    .use("/users", userRouter)
    .use("/sessions", sessionRouter);

app.listen(5000, () => {
    console.log("Server running in port 5000")
});