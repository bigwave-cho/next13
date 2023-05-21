import { IPost } from '@/app/list/page';
import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await connectDB;
  const db = client.db('forum');
  db.collection('user').insertOne({
    id: 'id',
    passwords: 'pass',
  });

  return res.status(200).json('가입완료');
}
