import { connectDB } from '@/util/database';
import { revalidatePath } from 'next/cache';

export default async function Write() {
  //DB에서 데이터 뽑아서 보여주기
  const db = (await connectDB).db('forum');
  let result = await db.collection('post_test').find().toArray();

  // api 따로 만들 필요 없이 server compo에서 보내기
  // next 내부적으로 api 생성함.
  async function handleSubmit(formData: any) {
    'use server';

    console.log(formData);
    const db = (await connectDB).db('forum');
    await db
      .collection('post_test')
      .insertOne({ title: formData.get('post1') });

    // server compo는 새로고침 X
    // client였으면 router.refresh()
    // 서버는 revalidatePath, revalidateTag 등 사용
    revalidatePath('/write2');
  }
  return (
    <form action={handleSubmit}>
      <input type="text" name="post1" />
      <button type="submit">Submit</button>
      {result ? result.map((a, i) => <p key={i}>글제목 : {a.title}</p>) : null}
    </form>
  );
}
