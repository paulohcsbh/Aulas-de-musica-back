import userRepository from "../repositories/user-repository";
import sessionRepository from "../repositories/session-repository";
import bcrypt from "bcrypt";
import { invalidCredentialsError } from "../errors/invalid-credential-error";
import jwt from "jsonwebtoken";

async function allSessions() {
    const sessions = await sessionRepository.allSessions();
    return sessions
}

async function createSession(email: string, password: string) {
    const user = await userRepository.getUserByEmail(email);
    
    if(!user){
        throw invalidCredentialsError();
    }   

    await validatePasswordOrFail(password, user.password);

    await createToken(user.id, user.email);      
}

async function validatePasswordOrFail(password: string, userPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    if (!isPasswordValid) throw invalidCredentialsError();
  }
async function createToken(userId: number, userEmail: string) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await sessionRepository.create(
        userEmail,
        token
    );
    return token;
  }

const sessionService = {
    allSessions,
    createSession
}

export default sessionService;