import trackService from "../services/track-service";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";

async function getAllTracks(req: AuthenticatedRequest, res: Response){
  
    try{
      const tracks = await trackService.allTracks();        
      return res.status(httpStatus.OK).send(tracks);
    }catch(err){
      console.log(err);
      return res.sendStatus(httpStatus.NO_CONTENT);      
    }
  }

  const trackController = {
    getAllTracks
  }

  export default trackController;