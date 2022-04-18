import mongoose from 'mongoose';
import { CONSTANTS } from '../../constants';

const { MONGODB: { CONNECTION } } = CONSTANTS;

export class Mongodb {
  public async connection() {
    try {
      await mongoose.connect(CONNECTION);
      console.log('Mongodb connected');
    } catch (error: any) {
      console.log(`Mongodb connnection error: ${error.message}`);
      process.exit(1);
    }
  }
}