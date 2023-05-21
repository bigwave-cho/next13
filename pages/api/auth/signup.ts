import { IPost } from '@/app/list/page';
import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const hashedPW = await bcrypt.hash(req.body.password, 10);

    // db에서 이메일 중복 찾아서 return해도 ㄱㅊ
    const client = await connectDB;
    const db = client.db('forum');
    db.collection('user_cred').insertOne({ ...req.body, password: hashedPW });
  }

  return res.status(200).json('가입완료');
}
