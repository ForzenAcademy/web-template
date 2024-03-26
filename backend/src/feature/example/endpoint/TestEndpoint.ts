import { DI } from 'forzen-di';
import { RestEndpoint, RestMethod } from 'forzen-network';
import { SCOPE } from '../DI';
import { User } from '../data/model/User';
import { TestRepository } from '../domain/repo/TestRepository';

export class TestEndpointGet extends RestEndpoint {
  constructor() {
    const repo: TestRepository = DI.scope(SCOPE).get('TestRepository');
    super(RestMethod.GET, '/test/', async (_req, res) => {
      res.json(await repo.getUsers());
    });
  }
}

export class TestEndpointPost extends RestEndpoint {
  constructor() {
    const repo: TestRepository = DI.scope(SCOPE).get('TestRepository');
    super(RestMethod.POST, '/test/', async (req, res) => {
      const name = req.body.name;
      const email = req.body.email;
      if (!name || !email) {
        res.status(400).send('Invalid fields');
      }
      repo.addUser(new User(name, email));
      res.sendStatus(200);
    });
  }
}
