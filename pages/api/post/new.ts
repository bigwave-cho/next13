import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //서버에서 사용할 때는 req, res도 arg로
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(400).json('로그인 정보가 없다.');
  }
  if (req.method == 'POST') {
    if (req.body.title == '') {
      return res.status(500).json('제목써라');
    }
    try {
      let db = (await connectDB).db('forum');
      let result = db
        .collection('post')
        .insertOne({ ...req.body, author: session?.user?.email });
      res.redirect(302, '/list');
    } catch (error) {
      res.status(400).json('서버에러');
    }
  }
}
