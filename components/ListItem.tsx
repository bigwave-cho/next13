'use client';

import Link from 'next/link';
import DetailLink from './DetailLink';
import { IPost } from '@/app/list/page';
import { WithId } from 'mongodb';

export default function ListItem({ result }: { result: WithId<IPost>[] }) {
  return (
    <div>
      {result.map((post, i) => {
        return (
          <div key={post._id.toString()} className="list-item">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <DetailLink path={`detail/${post._id.toString()}`} />
            <Link href={`/edit/${post._id.toString()}`}>수정</Link>

            <span
              onClick={() => {
                fetch('/api/post/delete', {
                  method: 'POST',
                  body: post._id.toString(),
                })
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err));
              }}
            >
              삭제
            </span>
          </div>
        );
      })}
    </div>
  );
}
