import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let db = (await connectDB).db('forum');

    const result = await db.collection('post').updateOne(
      { _id: new ObjectId(req.body._id) },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
        },
      }
    );

    console.log(result);

    res.redirect(302, '/list');
  } catch (error) {
    res.status(400).json('서버에러');
  }
}
