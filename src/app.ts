import express from 'express';
import cors from "cors";
import userRouter from './routes/user-router';
import helloRouter from './routes/hello-router';
import sessionRouter from './routes/session-route';
import trackRouter from './routes/track-route';
import contactRouter from './routes/contact-router';
import dotenv from "dotenv";
import { client } from './database/redis'
dotenv.config();

const app = express();
app
    .use(cors())
    .use(express.json())
    .use("/hello", helloRouter)
    .use("/users", userRouter)
    .use("/sessions", sessionRouter)
    .use("/tracks", trackRouter)
    .use("/contact", contactRouter);


export async function initRedis(): Promise<void> {
    await client.connect();
}
export default app;