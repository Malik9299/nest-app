<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Important Links

- Nest.js Tutorial - [Nest.js Full Course for Beginners | Complete All-in-One Tutorial | 3 Hours](https://www.youtube.com/watch?v=8_X0nSrzrCw)

- Unary_plus - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)

- Read validation-decorators - [https://github.com/typestack/class-validator?tab=readme-ov-file#validation-decorators](https://github.com/typestack/class-validator?tab=readme-ov-file#validation-decorators)

## Instalations

- For nested dto e.g add to update types - npm i @nestjs/mapped-types -D

- For Validation - npm i class-validator class-transformer

- For Install Prisma - npm i prisma -D then init the prisma using - npx prisma init

## Prisma

- After create the schema For Migration - npx prisma migrate dev --name init
- After update the schema - npx prisma generate
- Now run migration agaian for apply the changes - npx prisma migrate dev --name name_change

## nestjs

- For crate module, controller and service - nest g module users, nest g controller users, nest g service users

- For create resource - nest g resource employees
- then select Rest API - Note: this will create a complete CRUD

## Tasks

- Dependency injection - [https://angular.dev/guide/di](https://angular.dev/guide/di)
- Database - [https://docs.nestjs.com/techniques/database](https://docs.nestjs.com/techniques/database)
- Controllers - [https://docs.nestjs.com/controllers](https://docs.nestjs.com/controllers)
- SQL (TypeORM) - [https://docs.nestjs.com/recipes/sql-typeorm#repository-pattern](https://docs.nestjs.com/recipes/sql-typeorm#repository-pattern)

- Add a global prefix - in main
- CORS - in main
- Rate Limiting - $ npm i --save @nestjs/throttler - in app.module
- Logging - Logger [https://docs.nestjs.com/techniques/logger](https://docs.nestjs.com/techniques/logger)
- exception-filters [https://docs.nestjs.com/exception-filters](https://docs.nestjs.com/exception-filters)

## License

Nest is [MIT licensed](LICENSE).
