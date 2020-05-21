/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('Test GitHub search API', () => {
  it('should return the popular repo in github sorting by stars', async () => {
    const response = await request(app).get('/repositories').send({
      repoName: '',
      language: '',
      created: '',
      per_page: '1',
      sort: 'stars',
      order: 'desc',
    });

    expect(response.body).toHaveProperty('total_count');
    expect(response.body).toHaveProperty('items');
    expect(response.body.items).toHaveLength(1);
  });

  it('should return top 100 most popular repo in github', async () => {
    const response = await request(app).get('/repositories').send({
      repoName: '',
      language: '',
      created: '',
      per_page: '100',
      sort: 'stars',
      order: 'desc',
    });

    expect(response.body).toHaveProperty('total_count');
    expect(response.body).toHaveProperty('items');
    expect(response.body.items).toHaveLength(100);
  });

  it('should return most popular repo in github with a given language', async () => {
    const response = await request(app).get('/repositories').send({
      repoName: '',
      language: 'javascript',
      created: '',
      per_page: '10',
      sort: 'stars',
      order: 'desc',
    });

    expect(response.body).toHaveProperty('total_count');
    expect(response.body).toHaveProperty('items');
    expect(response.body.items).toHaveLength(10);
    expect(response.body.items[0]).toHaveProperty('name');
  });

  it('should return most popular repo in github with a given name', async () => {
    const response = await request(app).get('/repositories').send({
      repoName: 'mario',
      language: '',
      created: '',
      per_page: '1',
      sort: 'stars',
      order: 'desc',
    });

    expect(response.body).toHaveProperty('items');
    expect(response.body.items).toHaveLength(1);
    expect(response.body.items[0]).toHaveProperty('name');
    // expect(response.body.items[0].name).toBe('backbone.marionette');
  });

  it('should return most popular repo in github created from a specific date onwards', async () => {
    const response = await request(app).get('/repositories').send({
      repoName: '',
      language: '',
      created: '2020-01-01',
      per_page: '10',
      sort: 'stars',
      order: 'desc',
    });

    expect(response.body).toHaveProperty('total_count');
    expect(response.body).toHaveProperty('items');
    expect(response.body.items).toHaveLength(10);
  });

  it('should return 400 when given a wrong formatted date', async () => {
    const response = await request(app).get('/repositories').send({
      repoName: '',
      language: '',
      created: '20200-01-01',
      per_page: '10',
      sort: 'stars',
      order: 'desc',
    });

    expect(response.status).toBe(400);
    expect(response.body.name).toBe('Error');
  });

  it('should return 422 when given a number as a repo name', async () => {
    const response = await request(app).get('/repositories').send({
      repoName: 1,
      language: '',
      created: '',
      per_page: '10',
      sort: 'stars',
      order: 'desc',
    });
    const errorMessage = {
      errors: [
        {
          value: 1,
          msg: 'Repository name should be a string',
          param: 'repoName',
          location: 'body',
        },
      ],
    };
    expect(response.status).toBe(422);
    expect(response).toHaveProperty('text');
    expect(response.text).toBe(JSON.stringify(errorMessage));
  });
});
