import app from "../../src/app";
import supertest from "supertest";
import prisma from "../../src/database/db";
import { faker } from "@faker-js/faker";
import { createUser } from "../factories/userFactory";
import { generateValidBody } from "../helpers";

const server = supertest(app);

beforeAll(async() => {
    await prisma.user.deleteMany({});
});

describe("GET /users", () => {
    
    it("With or without users found return 200", async() => {
        const response = await server.get("/users");
        expect(response.status).toEqual(200);
    });
});

describe("POST /users", () => {
    const body = generateValidBody();
    it("given a valid user it should return 201", async() => {              
        const result = await server.post("/users").send(body);        
        expect(result.status).toEqual(201);
    });
    it("given a same email it should return 409", async() => {        
        await createUser(body);
        const result = await server.post("/users").send(body);        
        expect(result.status).toEqual(409);
    });
});
