# next 13버전 파헤쳐보기

## 몽고디비

- npm install mongodb

## api

app/ api는 아직 unstable

## static dynamic rendering

build 시 o 는 static
람다표시는 dynamic

알아서 구분해주지만
안 그럴 수 있으니 잘 확인

## Github auth(OAuth)

settings -> new app(OAuth) -> 개발시 localhost 넣어도 됨
-> client id/ secrets 키 발급

- npm install next-auth
  https://www.npmjs.com/package/next-auth

## DB adapter

OAuth는 JWT를 이용하여 유저의 정보가 담긴 토큰을 부여하고
요청 시 마다 해당 토큰을 받아 이상이 없으면 진행.

session 방식으로 구현하고 싶을 때 DB adaptor를 사용

1. 첫 로그인 - 자동으로 유저 회원가입 -> DB에 회원정보 보관
2. 로그인 시 자동으로 유저가 언제 로그인했는지 세션정보를 DB에 보관
3. 서버에서 지금 로그인된 유저정보가 필요하면 JWT가 아닌 DB에 있는 것 가져오기
4. 로그아웃시 유저 세션정보를 DB에서 삭제

'npm install @next-auth/mongodb-adapter'

- mongo가 아닌 Redis 같은 다른 디비도 기능 제공함
  Redis의 경우 메모리에 세션정보를 저장하기 때문에 훨씬 빠름.

로그인 후 MongoDB에 test라는 콜렉션 생성 확인

1. sessions: 현재 로그인 상태 유저 세션정보 저장(삭제하거나 정보 수정 가능. 로그아웃시키기)
2. users : 가입된 유저들
3. accounts : 가입된 유저의 계정정보

ex) 한유저 (메일이 같은)가 깃헙으로도 가입하고 구글로도 가입
users에는 하나, accounts에는 두 계정 도큐먼트 생성
