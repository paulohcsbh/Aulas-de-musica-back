import express from 'express';
import cors from "cors";
import userRouter from './routes/user-router';
import helloRouter from './routes/hello-router';
import sessionRouter from './routes/session-route';
import trackRouter from './routes/track-route';
import contactRouter from './routes/contact-router';
import dotenv from "dotenv";
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

const port = process.env.PORT || 5000;    
app.listen(5000, () => {
    console.log(`Server running in port ${port}`)
});