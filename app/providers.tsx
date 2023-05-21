'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

// 클라이언트 컴포넌트에 useSession 사용하기 참고
//https://codevoweb.com/setup-and-use-nextauth-in-nextjs-13-app-directory/
