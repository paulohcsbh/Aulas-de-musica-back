import Joi from "joi";

export const sessionSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})