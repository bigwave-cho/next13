import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { ObjectId } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let db = (await connectDB).db('forum');
    const result = await db
      .collection('comment')
      .find({ parent: new ObjectId(req.query.id as string) })
      .toArray();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json('서버에러');
  }
}
