import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  const db = (await connectDB).db('forum');
  const post = await db
    .collection('post')
    .findOne({ _id: new ObjectId(req.body) });

  if (post?.author === session?.user?.email) {
    try {
      await db.collection('post').deleteOne({ _id: new ObjectId(req.body) });
      res.status(200).json('삭제완료');
    } catch (error) {
      res.status(400).json('서버에러');
    }
  } else {
    res.status(400).json('본인 글이 아니에용');
  }
}
