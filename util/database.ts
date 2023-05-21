import { MongoClient, MongoClientOptions } from 'mongodb';
const url =
  'mongodb+srv://jhcho142857:qwer1234@cluster0.llzomjy.mongodb.net/?retryWrites=true&w=majority';
const options: MongoClientOptions = {};
let connectDB: Promise<MongoClient>;

connectDB = new MongoClient(url, options).connect();
export { connectDB };
