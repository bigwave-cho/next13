import { MongoClient, MongoClientOptions } from 'mongodb';
const url =
  'mongodb+srv://jhcho142857:qwer1234@cluster0.llzomjy.mongodb.net/?retryWrites=true&w=majority';

/*
세션정보를 설정해놓지 않으면 임의로 test콜렉션에 유저정보 저장(Adapter DB)
but 세션콜렉션명 기입하면 거기에 저장됨
'mongodb+srv://jhcho142857:qwer1234@cluster0.llzomjy.mongodb.net/<세션콜렉션명>?retryWrites=true&w=majority';
*/

const options: MongoClientOptions = {};
let connectDB: Promise<MongoClient>;

connectDB = new MongoClient(url, options).connect();
export { connectDB };
