import { Router } from "express";
import sessionController from "../controllers/session-controller";
import validateSchemaMiddleware from "../middlewares/validation-middleware";
import { sessionSchema } from "../schemas/session-schema";

const sessionRouter = Router();

sessionRouter.get("/", sessionController.getAllSessions);
sessionRouter.post("/", validateSchemaMiddleware(sessionSchema), sessionController.sessionsPost)

export default sessionRouter;
