import { Injectable } from '@nestjs/common';
import { collection, addDoc } from 'firebase/firestore/lite'; 

@Injectable()
export class AppService {
  getHello(): string {
    
    return 'Hello NIcolae!';
  }
}
