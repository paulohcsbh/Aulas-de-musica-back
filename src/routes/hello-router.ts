import { Router } from 'express';

import hello from '../controllers/hello-controller';

const helloRouter = Router();
helloRouter.get("/", hello);

export default helloRouter;