import { Router } from "express";
import contactController from "../controllers/contact-controller";
import validateSchemaMiddleware from "../middlewares/validation-middleware";
import { contactSchema } from "../schemas/contact-schema";
import { authenticateToken } from "../middlewares/authentication-middleware";

const contactRouter = Router();
contactRouter.all("/*", authenticateToken)
contactRouter.post("/", validateSchemaMiddleware(contactSchema),contactController.messagePost);
contactRouter.get("/", contactController.allTexts)

export default contactRouter;
