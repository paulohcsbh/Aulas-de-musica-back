import prisma from "../src/database/db";
import * as jwt from "jsonwebtoken";
import { User } from "@prisma/client";

import { createUser } from "./factories/userFactory";

import { createSession } from "./factories/sessionFactory";
import { faker } from "@faker-js/faker";

export async function cleanDb() {
    await prisma.user.deleteMany({});
    await prisma.session.deleteMany({});
  }



export const generateValidBody = () => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(6),
  });

export async function generateValidToken(user?: User) {
    const incomingUser = user || (await createUser());
    const token = jwt.sign({ userId: incomingUser.id }, process.env.JWT_SECRET);
  
    await createSession(token);
  
    return token;
  }
  