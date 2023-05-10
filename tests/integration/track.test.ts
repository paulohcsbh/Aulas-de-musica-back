import app from "../../src/app";
import supertest from "supertest";
import {faker} from "@faker-js/faker";
import prisma from "../../src/database/db";
import { generateValidBody, generateValidToken } from "../helpers";
import { createUser } from "../factories/userFactory";

const server = supertest(app);

beforeAll(async() => {
    await prisma.user.deleteMany({});
    await prisma.session.deleteMany({});
});

describe("GET /tracks", () => {    
    it("With or without tracks found return 200 user token is given", async() => {
        const user = await createUser();        
        const token =  await generateValidToken(user);    
           
        const response = await server.get("/tracks").set("Authorization", `Bearer ${token}`);
        expect(response.status).toEqual(200);
    });
    it("should respond with status 401 if no token is given", async() => {
        const token = "token_test"
        const response = await server.get("/tracks").set("Authorization", `Bearer ${token}`);;
        expect(response.status).toEqual(401);
    });
   
});