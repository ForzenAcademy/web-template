import { RestEndpoint, RestMethod } from 'forzen-network';

export class TestEndpoint extends RestEndpoint {
  constructor() {
    super(RestMethod.GET, '/test/', async (req, res) => {
      res.send('Hello');
    });
  }
}
