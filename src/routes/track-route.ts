import { Router } from "express";
import trackController from "../controllers/track-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";

const trackRouter = Router();
trackRouter.all("/*", authenticateToken)
trackRouter.get("/", trackController.getAllTracks);

export default trackRouter;
