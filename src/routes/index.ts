import { Router } from 'express';
import gitHubRepoRouter from './github-repo.routes';

const routes = Router();

routes.use('/repositories', gitHubRepoRouter);

export default routes;
