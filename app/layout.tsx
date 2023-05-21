import Link from 'next/link';
import './globals.css';
import LoginBtn from '@/components/LoginBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutBtn from '@/components/LogoutBtn';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //server 컴포나 api에서 사용 가능 메서드
  const session = await getServerSession(authOptions);
  console.log(session); // github에서 제공하는 정보 나옴
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
        {children}
      </body>
    </html>
  );
}
