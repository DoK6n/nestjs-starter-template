<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

NestJS 서버 초기 세팅

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Typeorm-model-generator

DB의 테이블구조을 기반으로 엔티티 파일들을 생성합니다.

```bash
npm i -g typeorm-model-generator
typeorm-model-generator -h localhost -u $userName -x $password -e mysql -o ./entities
```

## 구성

- Guard
- exception filter
- logging interceptor
- custom Logger
- types
- swagger
- utils
- typeorm