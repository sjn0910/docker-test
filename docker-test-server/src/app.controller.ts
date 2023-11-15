import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as mysql2 from 'mysql2/promise';
import * as dotenv from 'dotenv';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    dotenv.config();

    const connection = await mysql2.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: Number(process.env.DB_PORT),
    });

    const result = await connection.execute(
      `INSERT INTO samples VALUES (NULL);`,
    );

    connection.end();

    return this.appService.getHello(result);
  }
}
