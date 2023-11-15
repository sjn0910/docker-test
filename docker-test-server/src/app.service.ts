import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(result): string {
    return `test success with id + ${result[0].insertId}`;
  }
}
