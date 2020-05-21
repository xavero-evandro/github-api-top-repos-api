import { Router } from 'express';
import GitHubRepoController from '../controllers/github-repo.controller';

const gitHubRepoRouter = Router();

gitHubRepoRouter.get('/', GitHubRepoController.searchRepo);

export default gitHubRepoRouter;
