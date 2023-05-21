import Image from 'next/image';
import Link from 'next/link';
import 이미지 from '@/public/image.jpg';

export default function Home() {
  return (
    <main>
      {/* <Image src={이미지} alt="이미지" /> */}
      <Image
        src="https://images.unsplash.com/photo-1684444161762-95fbabc9a766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3257&q=80"
        alt="이미지2"
        width={100}
        height={100}
      />
      <h1 className="title">Programming Log</h1>
      <p className="title-sub">by dev kim</p>
    </main>
  );
}
