import contactService from "../services/contact-service";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";

async function messagePost(req: AuthenticatedRequest, res: Response) {
    const { text } = req.body; 
    const authorId = req.userId
       
    try {
      await contactService.sendMessage(text, authorId);
      return res.sendStatus(httpStatus.CREATED)
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
  }
  async function allTexts(req: AuthenticatedRequest, res: Response){  
    const { userId } = req;
    try{
      const texts = await contactService.allTexts(userId);        
      return res.send(texts);
    }catch(err){
      console.log(err);
      return res.sendStatus(404);
      
    }
  }
  const contactController = {
    messagePost,
    allTexts
  }

  export default contactController;