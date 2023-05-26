import DetailLink from '@/components/DetailLink';
import ListItem from '@/components/ListItem';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import Link from 'next/link';

/*
# 페이지를 캐싱
아래처럼 revalidate를 설정

# fetch 데이터를 캐싱
or 아래 포스트 list를 가져오는 몽고디비 코드를
api화 시켜서 fetch -> fetch자체 revalidate시키거나.
 */

export const revalidate = 60;

export interface IPost {
  _id: ObjectId | string;
  title: string;
  content: string;
}

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection<IPost>('post').find().toArray();
  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
