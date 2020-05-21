import { Request, Response } from 'express';
import { getRepositories } from '../services/github-repo.services';
import { buildFilterParams } from '../utils/filter-builder';

const UserController = {
  async searchRepo(req: Request, res: Response): Promise<Response> {
    try {
      const { repoName, language, created, per_page, sort, order } = req.body;
      const filter = buildFilterParams({
        repoName,
        language,
        created,
      });
      const repositories = await getRepositories({
        filter,
        per_page,
        sort,
        order,
      });

      return res.json(repositories);
    } catch (error) {
      return res
        .status(400)
        .json({ name: error.name, message: error.message, stack: error.stack });
    }
  },
};

export default UserController;
