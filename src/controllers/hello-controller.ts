import { Request, Response } from 'express';
import { client } from "../database/redis";
async function hello(req: Request, res: Response){
    const hello = (Math.random() * 100).toFixed(0)
    await client.set("chave", hello);
    res.send(await client.get("chave"));
}
export default hello;
