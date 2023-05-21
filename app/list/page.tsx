import DetailLink from '@/components/DetailLink';
import ListItem from '@/components/ListItem';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import Link from 'next/link';

export interface IPost {
  _id: ObjectId;
  title: string;
  content: string;
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
