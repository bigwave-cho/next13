import { IPost } from '@/app/list/page';
import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.json('Login 해라');
    return;
  }

  const body = JSON.parse(req.body);

  if (req.method === 'POST') {
    let comment = {
      content: body.comment,
      parent: new ObjectId(body._id),
      author: session?.user?.email,
    };

    const client = await connectDB;
    const db = client.db('forum');

    let result = await db.collection('comment').insertOne(comment);

    let updatedList = await db
      .collection('comment')
      .find({ parent: new ObjectId(body._id) })
      .toArray();
    res.status(200).json(updatedList);
  }
}
