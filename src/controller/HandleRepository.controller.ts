import {Router, Request, Response} from "express";

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  console.log(req.body);
  res.send();
});

export default router;