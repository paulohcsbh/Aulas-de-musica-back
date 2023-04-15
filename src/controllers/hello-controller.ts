import { Request, Response } from 'express';

async function hello(req: Request, res: Response){
    res.send("Aôba!");
}
export default hello;
