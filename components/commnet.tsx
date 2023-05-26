'use client';
import { useEffect, useState } from 'react';

export default function Comment({ postId }: { postId: string }) {
  const [comment, setComment] = useState('');
  const [data, setData] = useState<
    {
      content: string;
      _id: string;
    }[]
  >([]);
  useEffect(() => {
    fetch('/api/comment/list?id=' + postId)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, [postId, data]);

  return (
    <div>
      {data.map((com, i) => {
        return <div key={i}>{com.content}</div>;
      })}
      <input
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({
              comment: comment,
              _id: postId,
            }),
          });
          setComment('');
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
