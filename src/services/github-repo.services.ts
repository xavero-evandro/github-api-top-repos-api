/* eslint-disable import/prefer-default-export */
import axios, { AxiosResponse } from 'axios';
import GitHubRepoSearch from '../interfaces/GitHubRepoSearch.interface';
import {
  BASE_GITHUB_URL,
  BASE_GITHUB_ACTION_URL,
  BASE_GITHUB_REPOSITORIES_URL,
} from '../constants/github-api-urls';

export const getRepositories = async ({
  filter,
  per_page,
  sort,
  order,
}: GitHubRepoSearch): Promise<AxiosResponse> => {
  try {
    const repositories = await axios.get(
      `${BASE_GITHUB_ACTION_URL}${BASE_GITHUB_REPOSITORIES_URL}`,
      {
        baseURL: BASE_GITHUB_URL,
        params: {
          q: filter,
          per_page,
          sort,
          order,
        },
      }
    );
    return repositories.data;
  } catch (error) {
    throw new Error(error);
  }
};
