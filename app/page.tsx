import { connectDB } from '@/util/database';

export default async function Home() {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  // db 입출력 코드는 서버컴포넌트에 why? : client compo는 유저들이 쉽게 접근 가능
  console.log(result);

  // fetch 캐싱기능
  // await fetch('/URL', { cache: 'force-cache', next: { revalidate: 60 } });
  // 이런식으로 캐싱을 이용해서
  // dynamic렌더링 이더라도 서버 부담 감소 가능
  // revalidate: 캐싱 60초만

  // 실시간 패칭이 중요하다? 'no-store'

  /*
  중요:
  여러 컴포에서 같은 url로 fetch하는 경우
  중복은 알아서 걸러짐.
  
  */

  return <div>hihi</div>;
}
