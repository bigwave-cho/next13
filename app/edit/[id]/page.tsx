import { IPost } from '@/app/list/page';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

interface IWriteProps {
  params: { id: string };
}

const Write = async (props: IWriteProps) => {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db
    .collection<IPost>('post')
    .findOne({ _id: new ObjectId(`${props.params.id}`) });
  return (
    <div className="p-20">
      <h4>수정</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" placeholder="글제목" defaultValue={result?.title} />
        <input
          name="content"
          placeholder="글내용"
          defaultValue={result?.content}
        />
        <input
          style={{ display: 'none' }}
          name="_id"
          defaultValue={result?._id.toString()}
        ></input>
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default Write;
