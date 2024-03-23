import { RestExpressServer } from 'forzen-network';
import { TestEndpoint } from './endpoint/TestEndpoint';

const port: number = 3000;
const server = new RestExpressServer(port);
server.addEndpoint(new TestEndpoint());
server.start();
