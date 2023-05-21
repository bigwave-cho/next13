'use client';

import Link from 'next/link';
import DetailLink from './DetailLink';
import { IPost } from '@/app/list/page';
import { WithId } from 'mongodb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function ListItem({ result }: { result: WithId<IPost>[] }) {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div>
      {result.map((post, i) => {
        return (
          <div id={`${i}`} key={post._id.toString()} className="list-item">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <DetailLink path={`detail/${post._id.toString()}`} />
            <Link href={`/edit/${post._id.toString()}`}>수정</Link>

            {session?.user?.email === post.author ? (
              <span
                onClick={(e) => {
                  //이런식으로 쿼리 넣어서
                  // 삭제도 가능 GET 이용해도
                  //  fetch(`/api/test?name=값`)

                  fetch('/api/post/delete', {
                    method: 'POST',
                    body: post._id.toString(),
                  })
                    .then((res) => res.json())
                    .then(() => {
                      document.getElementById(`${i}`)!.style.opacity = '0';

                      setTimeout(() => {
                        document.getElementById(`${i}`)!.style.display = 'none';
                      }, 1000);
                    })
                    .catch((err) => console.log(err));
                }}
              >
                삭제
              </span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
