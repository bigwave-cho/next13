'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

const LoginBtn = () => {
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      로그인
    </button>
  );
};

export default LoginBtn;
