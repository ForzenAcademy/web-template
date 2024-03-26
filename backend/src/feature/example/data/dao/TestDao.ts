import { ColumnType, ForzenDb, TableDefinition } from 'forzen-db';
import { DI } from 'forzen-di';
import { SCOPE } from '../../DI';
import { User } from '../model/User';

export interface TestDao {
  createUserTable(): Promise<void>;
  insert(user: User): Promise<void>;
  getUsers(): Promise<User[]>;
}

export class TestDaoImpl implements TestDao {
  private db: ForzenDb;
  constructor() {
    this.db = DI.scope(SCOPE).get('ForzenDb');
  }

  async createUserTable(): Promise<void> {
    const table = new TableDefinition('users', [
      TableDefinition.column('id', ColumnType.INTEGER, false, true),
      TableDefinition.column('name', ColumnType.TEXT),
      TableDefinition.column('email', ColumnType.TEXT),
    ]);
    await this.db.createTable(table, true);
  }

  async insert(user: User): Promise<void> {
    await this.db.insert(user);
  }

  async getUsers(): Promise<User[]> {
    return await this.db.all('SELECT * FROM users', []);
  }
}
