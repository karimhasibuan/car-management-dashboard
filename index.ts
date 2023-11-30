import express, { Express } from "express";
import handleLogger from "./src/middleware/handlerLogger";
import carRouter from "./src/routes/carRouter";
import userRouter from "./src/routes/userRouter";
import knex from "knex";
import { Model } from "objection";
import session from "express-session";
import secretKey from "./src/middleware/secretKeyToken";

const app: Express = express();
const PORT = 3000;

const knexInstance = knex({
  client: "pg",
  connection: {
    database: "car_management_db",
    user: "postgres",
    password: "12345",
  },
});

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
  })
);

Model.knex(knexInstance);

app.set("view engine", "ejs");

app.set("views", "./src/views");
app.use(express.static("public"));
app.use(express.urlencoded());
app.use(handleLogger);

app.use("/v1/cars", carRouter);
app.use("/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`is listening to port ${PORT}`);
});
