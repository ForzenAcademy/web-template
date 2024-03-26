import { DI } from 'forzen-di';
import { SCOPE } from '../../DI';
import { TestDao } from '../../data/dao/TestDao';
import { User } from '../../data/model/User';

export interface TestRepository {
  getUsers(): Promise<User[]>;
  addUser(user: User): Promise<void>;
}

export class TestRepositoryImpl implements TestRepository {
  private dao: TestDao;
  constructor() {
    this.dao = DI.scope(SCOPE).get('TestDao');
    this.dao.createUserTable();
  }
  async getUsers(): Promise<User[]> {
    return await this.dao.getUsers();
  }
  async addUser(user: User): Promise<void> {
    await this.dao.insert(user);
  }
}
