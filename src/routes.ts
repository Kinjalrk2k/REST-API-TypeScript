import { Express, Request, Response } from "express";
import validateRequest from "./middlewares/validateRequest";
import { createUserHandler } from "./controllers/user.controller";
import {
  createUserSchema,
  createUserSessionSchema,
} from "./schemas/user.schema";
import { createUserSessionHandler } from "./controllers/session.controller";

export default (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  // Register user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  // Login User
  app.post(
    "/api/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  // Get User's sessions

  // Logout
};
