import { Inject, Injectable, Logger } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class DatabaseService {
  private readonly logger = new Logger(DatabaseService.name);
  constructor(@Inject('DATABASE_POOL') private pool: Pool) {}
  executeQuery(
    queryText: string,
    values: (string | number)[] = [],
  ): Promise<any[]> {
    this.logger.debug(`Executing query: ${queryText} (${values})`);
    return this.pool
      .query(queryText, values)
      .then((result: QueryResult) => {
        this.logger.debug(`Executed query, result size ${result.rows.length}`);
        return result.rows;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
}
