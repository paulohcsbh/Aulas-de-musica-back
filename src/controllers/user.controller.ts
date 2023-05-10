import userService from "../services/user-service";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import httpStatus from 'http-status';

async function usersPost(req: Request, res: Response) {
  const { name, email, password } = req.body;   
  try {
    await userService.createUser( name, email, password );
    return res.sendStatus(httpStatus.CREATED)
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

async function getAllUsers(req: Request, res: Response){  
  try{
    const users = await userService.allUsers();        
    return res.send(users);
  }catch(err){
    return res.sendStatus(httpStatus.BAD_REQUEST);
    
  }
}

 
const userController = {
    usersPost,
    getAllUsers
}

export default userController;
