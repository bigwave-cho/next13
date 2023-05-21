import { connectDB } from '@/util/database';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GH_CLIENT_ID ?? '',
      clientSecret: process.env.NEXT_PUBLIC_GH_SECRET_KEY ?? '',
    }),
  ],
  secret: process.env.NEXT_PUBLIC_JWT_KEY, // jwt 생성 암호 : 길고 복잡하게 만들기
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
