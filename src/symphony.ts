import express from 'express';
import bodyParser from "body-parser";
import HandleRepositoryController from "./controller/HandleRepository.controller";

const app = express();
const rootRouter = express.Router();
app.use(bodyParser.json());
app.use('/alexandria', rootRouter);

app.use('/repository', HandleRepositoryController);

app.listen(8888, () => {
  console.log('Server is running on port 8888');
});