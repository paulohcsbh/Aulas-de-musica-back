import userRepository from "../repositories/user-repository";
import bcrypt from "bcrypt";
import { duplicatedEmailError } from "../errors/duplicated-email-error";

export async function createUser(name: string, email: string, password: string) {
    const emailExists = await userRepository.getUserByEmail(email);
    console.log(emailExists);
    const passwordHash = bcrypt.hashSync(password, 12);
    if(emailExists){
      throw duplicatedEmailError();
    }
    await userRepository.create(
      name,
      email,
      passwordHash  
    );
  }

  async function allUsers() {
    const users = await userRepository.getUserAll();
    return users
  }

  const userService = {
    createUser,
    allUsers
  };

  export default userService;