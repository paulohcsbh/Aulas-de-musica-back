import prisma from "../../src/database/db";
import { faker } from "@faker-js/faker";
import { User } from "@prisma/client";

export async function createUser(body?: Partial<User>): Promise<User>{
    console.log(body);
    if(!body){
        return await prisma.user.create({
            data: {
                name: faker.name.fullName(),
                email:  faker.internet.email(),
                password: faker.internet.password(6)
              },
        });    
    }
    return await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password 
          },
    });    
}