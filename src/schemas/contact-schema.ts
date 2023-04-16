import Joi from "joi";

export const contactSchema = Joi.object({
   text: Joi.string().required(),
   
})