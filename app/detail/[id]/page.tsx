import { IPost } from '@/app/list/page';
import Comment from '@/components/commnet';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Detail(props: any) {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db
    .collection<IPost>('post')
    .findOne({ _id: new ObjectId(`${props.params.id}`) });

  return (
    <div>
      <h4>상세</h4>
      <h4>{result?.title}</h4>
      <p>{result?.content}</p>
      <Comment postId={result?._id.toString() ?? ''} />
    </div>
  );
}
