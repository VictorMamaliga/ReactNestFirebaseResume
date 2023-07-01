import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // aici faci logica de adaugare
    return 'Hello NIcolae!';
  }
}
