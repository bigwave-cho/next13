import { IPost } from '@/app/list/page';
import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection<IPost>('post').find().toArray();
    return res.status(200).json(result);
  } else {
    return res.status(200).json('POST');
  }
}
