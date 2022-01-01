# My contacts list

This is a fullstack proect with two services, backend and frontend.

Once both services is up you can access by the localhost:3000 URL

## Backend (NodeJS)

Back end is written in NodeJS, using MongoDB as database.

- Using Mongoose as library to comunicate Node with MongoDB;
- Express to expose and start an API server;
- BodyParser to auto-parse JSON to JS Object;
- CORS to enable middleware, as BodyParser is a middleware.

JSON was used because is a Object Notation of JavaScript, Mongo use JSON to store data and it's the most data estructur used in nowadays in REST APIs.

To start and use this service you need to have Node installed in your machine and configure your MongoDB url into `server/index.js` at line 20.

Leaving URLs in code is a vulnerability detected by GitHub, that's why you need to configure with your own MongoDB cluster, following these steps:
[Connect to a MongoDB Database Using Node.js](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database)

In root's project folder, open a terminal and execute the following commands:

> cd server \
> npm install \
> npm run start

The `npm install` command it's a need for the first time running, because you need to install all dependencies of the project.

## Frontend (React)

Frontend was written in React, one of the most popular frontend JS framework (that's why I choose it).

To make it easier to code, I used those libraries:

- Material UI so I'll have ready to use components with mobile friendly design and without need to write CSS
- Axios so frontend can make REST calls to the REST API written in Node.

To start and use this service you need to have Node installed in your machine.

In root's project folder, open a terminal and execute the following commands:

> cd frontend \
> npm install \
> npm run start

The `npm install` command it's a need for the first time running, because you need to install all dependencies of the project.
