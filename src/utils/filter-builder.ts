/* eslint-disable import/prefer-default-export */
import QueryFilterParams from '../interfaces/FilterParams.interface';

export const buildFilterParams = ({
  repoName,
  language,
  created,
}: QueryFilterParams): string => {
  const repoNameParams = repoName ? `${repoName} in:name` : '';
  const languageParam = language ? `language:${language}` : '';
  const createdParam = created ? `created:>=${created}` : '';
  const stars = 'stars:>=1';
  return `${stars} ${repoNameParams} ${languageParam} ${createdParam}`.trim();
};
