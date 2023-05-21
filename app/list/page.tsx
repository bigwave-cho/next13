import ListItem from '@/components/ListItem';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

// dynamic rendering 강제하기
export const dynamic = 'force-dynamic';
// 'force-static' 은 스태틱강제

export interface IPost {
  _id: ObjectId;
  title: string;
  content: string;
  author: string;
}

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection<IPost>('post').find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
