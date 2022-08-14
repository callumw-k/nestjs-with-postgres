import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ExampleInterface } from './interfaces/example.interface';

@Injectable()
export class ExampleService {
  //inject the database connection
  constructor(private readonly db: DatabaseService) {}
  async create(expense: ExampleInterface) {
    return this.db.executeQuery(
      'insert into exampletable (name, description) values ($1, $2)',
      [expense.name, expense.description],
    );
  }
  async getAllExamples() {
    const all = await this.db.executeQuery('SELECT * FROM exampletable');
    return all;
  }
}
