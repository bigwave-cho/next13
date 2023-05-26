import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // console.log(req.nextUrl);
  // console.log(req.cookies); //get 으로 쿠키 겟!@
  // console.log(req.headers); // 브라우저, 언어, OS

  // NextResponse.next(); //통과
  // NextResponse.redirect('/'); //다른페이지 이동
  // NextResponse.rewrite('/');

  if (req.nextUrl.pathname === '/list') {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith('/list')) {
    console.log('aa');
  }

  //로그인 X - > 리다이렉트
  //jwt 방식에서만 사용가능 (OAuth시 jwt생성 안하고 있어 null 받음.)
  // if (req.nextUrl.pathname.startsWith('/write')) {
  //   const session = await getToken({ req: req });
  //   console.log('세션', session);
  //   if (session == null) {
  //     return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  //   }
  // }

  // register시 방문여부
  if (req.nextUrl.pathname.startsWith('/register')) {
    if (req.cookies.has('visited') == false) {
      const response = NextResponse.next();
      response.cookies.set({
        name: 'visited',
        value: 'true',
        maxAge: 3600,
      });
      return response;
    }
    return NextResponse.next();
  }

  //쿠키설정

  req.cookies.get('쿠키이름'); //출력
  req.cookies.has('쿠키이름'); //존재확인
  req.cookies.delete('쿠키이름'); //삭제

  const response = NextResponse.next();
  response.cookies.set({
    name: 'mode',
    value: 'dark',
    maxAge: 3600,
    httpOnly: true, // 유저가 JS를 마음대로 조작 불능하도록
  });
  return response;
}
