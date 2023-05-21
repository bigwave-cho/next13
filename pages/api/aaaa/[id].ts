import { IPost } from '@/app/list/page';
import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // /api/aaaa/:id
  console.log(req.query.id);

  return res.status(200).json('가입완료');
}
