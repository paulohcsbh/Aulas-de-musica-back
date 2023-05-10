import app from "../../src/app";
import supertest from "supertest";
import prisma from "../../src/database/db";
import { generateValidToken } from "../helpers";
import { createUser } from "../factories/userFactory";

const server = supertest(app);

beforeAll(async() => {
    await prisma.user.deleteMany({});
    await prisma.session.deleteMany({});
});

describe("GET /contact", () => {    
    it("return 200 user token is given", async() => {
        const user = await createUser();        
        const token =  await generateValidToken(user);    
           
        const response = await server.get("/contact").set("Authorization", `Bearer ${token}`);
        expect(response.status).toEqual(200);
    });
    it("should respond with status 401 if no token is given", async() => {
        const token = "token_test"
        const response = await server.get("/contact").set("Authorization", `Bearer ${token}`);;
        expect(response.status).toEqual(401);
    });
   
});