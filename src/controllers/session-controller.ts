import sessionService from "../services/session-service";
import { Response, Request } from "express";
import httpStatus from "http-status"; 

async function getAllSessions(req: Request, res: Response){  
    try{
      const sessions = await sessionService.allSessions();        
      return res.send(sessions);
    }catch(err){
      
      return res.sendStatus(404);
      
    }
  }

  async function sessionByEmail(req: Request, res: Response){  
    const { email } = req.body;
    try{
      const session = await sessionService.getOneSession(email);        
      return res.send(session);
    }catch(err){
      
      return res.sendStatus(404);
      
    }
  }

  async function sessionsPost(req: Request, res: Response) {
    const { email, password } = req.body; 
    
    try {
      await sessionService.createSession( email, password );
      return res.sendStatus(httpStatus.CREATED)
    } catch (error) {
      if (error.name === "NotRegisteredError") {
        return res.status(httpStatus.UNAUTHORIZED).send(error);
      }
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
  }

  const sessionController = {
    getAllSessions,
    sessionsPost,
    sessionByEmail
  }

  export default sessionController;