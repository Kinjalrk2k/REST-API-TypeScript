# REST API using TypeScript

### Initialize TypeScript Project

`npx typescript --init`

### Install Dependancies:

`yarn add express yup config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid`

### Install Dev-Dependencies:

`yarn add @types/bcrypt @types/body-parser @types/config @types/cors @types/express @types/jsonwebtoken @types/lodash @types/mongoose @types/nanoid @types/node @types/pino @types/yup ts-node typescript`

### Nodemon Configuration

./nodemon.json

```json
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/", "dist/", "coverage/"],
  "watch": ["src/"],
  "execMap": {
    "ts": "node -r ts-node/register"
  },
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json,ts"
}
```

### Default Application Configuration

./config/default.ts

```ts
export default {
  port: 5000,
  host: "localhost",
  mongoURI: "mongodb://localhost:27017/rest-api-typescript",
  saltWorkFactor: 10,
};
```

Later import this configurations in the ./src/app.ts and ./src/db/connect.ts files

## Use a logger

./src/logger/index.ts

```ts
import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
```

> `console.log`s should be replaced by the logger, as `console.log`s blocks the I/O as NodeJS is single threaded and it slows up the application

# Big Note: What to put where?

- `middlewares`: Express Middlewares
- `models`: Database Models
- `schemas`: Validation Schemas
- `services`: Interacting with the Database (+ other bussiness logic)
- `utils`: Other utility functions that are common throughout the API server
- `controllers`: Combine everything (services and utils) in a handler for the routes
