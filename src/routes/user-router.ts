import { Router } from "express";
import userController from "../controllers/user.controller";
import validateSchemaMiddleware from "../middlewares/validation-middleware";
import { userSchema } from "../schemas/user-schema";

const userRouter = Router();

userRouter.post("/", validateSchemaMiddleware(userSchema), userController.usersPost);
userRouter.get("/", userController.getAllUsers);

export default userRouter;
