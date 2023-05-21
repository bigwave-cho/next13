import DetailLink from '@/components/DetailLink';
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
      {result?.map((post, i) => (
        <div key={post._id.toString()} className="list-item">
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <DetailLink path={`detail/${post._id.toString()}`} />
          <Link href={`/edit/${post._id.toString()}`}>수정</Link>
        </div>
      ))}
    </div>
  );
}
