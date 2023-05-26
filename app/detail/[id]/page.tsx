import { IPost } from '@/app/list/page';
import Comment from '@/components/commnet';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { notFound } from 'next/navigation';

export default async function Detail(props: any) {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db
    .collection<IPost>('post')
    .findOne({ _id: new ObjectId(`${props.params.id}`) });

  if (result === null) {
    return notFound(); // notfound 페이지 렌더링 메서드
  }

  return (
    <div>
      <h4>상세</h4>
      <h4>{result?.title}</h4>
      <p>{result?.content}</p>
      <Comment postId={result?._id.toString() ?? ''} />
    </div>
  );
}
