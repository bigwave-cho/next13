import { connectDB } from '@/util/database';

export default async function Home() {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  // db 입출력 코드는 서버컴포넌트에 why? : client compo는 유저들이 쉽게 접근 가능
  console.log(result);
  return <div>hihi</div>;
}
