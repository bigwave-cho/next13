'use client';
import { useSession, signOut } from 'next-auth/react';

const LogoutBtn = ({ name }: { name?: string }) => {
  return (
    <div>
      <span>{name}</span>
      <button
        onClick={() => {
          signOut();
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default LogoutBtn;
