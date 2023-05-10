import { Request, Response } from 'express';
import { client } from "../database/redis";
async function hello(req: Request, res: Response){
    const hello = "Aôba!"
    await client.set("chave", hello);
    res.send(await client.get("chave"));
}
export default hello;
