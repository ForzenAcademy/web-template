import { Entity } from 'forzen-db';

export class User implements Entity {
  tableName: string = 'users';
  public id: number;
  constructor(
    public readonly name: string,
    public readonly email: string,
  ) {
    this.id = -1;
  }
}
