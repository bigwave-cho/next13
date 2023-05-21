import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let db = (await connectDB).db('forum');

    await db.collection('post').deleteOne({ _id: new ObjectId(req.body) });
    res.status(200).json('삭제완료');
  } catch (error) {
    res.status(400).json('서버에러');
  }
}
