import { IPost } from '@/app/list/page';
import { connectDB } from '@/util/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const a = new Date();

  res.status(200).json(a);
}
