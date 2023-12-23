import express, { Express } from "express";
import knex from "knex";
import { Model } from "objection";
import session from "express-session";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import secretKey from "./src/middleware/secretKeyToken";
import handleLogger from "./src/middleware/handlerLogger";
import carRouter from "./src/routes/carRouter";
import userRouter from "./src/routes/userRouter";
import landingPageRouter from "./src/routes/landingPageRouter";
import bodyParser from "body-parser";

const app: Express = express();
const PORT = 3001;

const knexInstance = knex({
  client: "pg",
  connection: {
    database: "car_management_db",
    user: "postgres",
    password: "12345",
  },
});

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Car Management API",
      version: "1.0.0",
      description: "API documentation for the Car Management System",
    },
  },
  apis: ["./src/swagger-spec.yaml"],
};

const specs = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors());
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
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(handleLogger);

app.get("/favicon.ico", (req, res) => res.status(204));

app.use("/", landingPageRouter);
app.use("/v1/cars", carRouter);
app.use("/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`is listening to port ${PORT}`);
});
