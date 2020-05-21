/* eslint-disable no-undef */
import { buildFilterParams } from '../../src/utils/filter-builder';

describe('Testing filter builder', () => {
  it('should return a filter string formatted', () => {
    const repoName = 'mario';
    const language = 'javascript';
    const created = '2019-01-01';
    const filter = buildFilterParams({
      repoName,
      language,
      created,
    });
    const expectFormattedString =
      'stars:>=1 mario in:name language:javascript created:>=2019-01-01';
    expect(filter).toHaveLength(64);
    expect(filter).toEqual(expectFormattedString);
  });

  it('should return a filter string formatted with default values', () => {
    const repoName = '';
    const language = '';
    const created = '';
    const filter = buildFilterParams({
      repoName,
      language,
      created,
    });
    const expectFormattedString = 'stars:>=1';
    expect(filter).toHaveLength(9);
    expect(filter).toEqual(expectFormattedString);
  });
});
