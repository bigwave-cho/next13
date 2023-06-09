import Link from 'next/link';
import './globals.css';
import LoginBtn from '@/components/LoginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutBtn from '@/components/LogoutBtn';
import { NextAuthProvider } from './providers';
// 최상위 layout은 동일 경로 error.tsx로는 처리 안됨.
// global error 사용
//https://nextjs.org/docs/app/api-reference/file-conventions/error#error
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //server 컴포나 api에서 사용 가능 메서드
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/" className="logo">
            communityHOME
          </Link>
          <Link href="/list">List</Link>
          {session?.user ? (
            <LogoutBtn name={session.user!.name ?? 'Anon'} />
          ) : (
            <LoginBtn />
          )}
        </div>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
