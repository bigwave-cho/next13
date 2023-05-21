'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function DetailLink({ path }: { path: string }) {
  const router = useRouter();
  // const path = usePathname();
  const params = useSearchParams();

  return (
    <button
      onClick={() => {
        router.push(path);
      }}
    >
      링크
    </button>
  );
}

/*
router 기능
back() 뒤로
forward() 앞으로
refresh() 바뀐 내용만 새로고침
prefetch() 해당되는 패스 페이지 미리 로드

Link도 prefetch 내장
*/
