# REST API using TypeScript

### Initialize TypeScript Project

`npx typescript --init`

### Install Dependancies:

`yarn add express yup config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid`

### Install Dev-Dependencies:

`yarn add @types/bcrypt @types/body-parser @types/config @types/cors @types/express @types/jsonwebtoken @types/lodash @types/mongoose @types/nanoid @types/node @types/pino @types/yup ts-node typescript`

### Nodemon Configuration

./nodemon.json

```
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

```
export default {
  port: 5000,
  host: "localhost",
  mongoURI: "mongodb://localhost:277017/rest-api-typescript"
}
```
