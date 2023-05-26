export default function Loading() {
  return <div>loading...</div>;
}

/*
아래 기능이 내부적으로 동작
<Suspense fallback={<div>로딩중</div>}>
  <div>로딩로딩</div>
</Suspense>
*/
