import { RestExpressServer } from 'forzen-network';
import { TestEndpointGet, TestEndpointPost } from './endpoint/TestEndpoint';
import { DI } from 'forzen-di';
import { SCOPE } from './DI';
import { TestRepositoryImpl } from './domain/repo/TestRepository';
import { ForzenSqliteDb } from 'forzen-db';
import { TestDaoImpl } from './data/dao/TestDao';

const scope = DI.addModule(SCOPE);
scope.provide(new ForzenSqliteDb(), 'ForzenDb');
scope.provide(new TestDaoImpl(), 'TestDao');
scope.provide(new TestRepositoryImpl(), 'TestRepository');

const server = new RestExpressServer(3000);
server.addEndpoint(new TestEndpointGet());
server.addEndpoint(new TestEndpointPost());
server.start();
