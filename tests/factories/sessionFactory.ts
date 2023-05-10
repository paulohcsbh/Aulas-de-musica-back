import { Session } from "@prisma/client";
import { createUser } from "./userFactory";
import prisma from "../../src/database/db";

export async function createSession(token: string): Promise<Session> {
  const user = await createUser();

  return await prisma.session.create({
    data: {
      email: user.email,
      token: token,
    },
  });
}
