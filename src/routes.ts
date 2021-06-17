import { Express, Request, Response } from "express";
import { validateRequest, requiresUser } from "./middlewares";
import { createUserHandler } from "./controllers/user.controller";
import {
  createUserSchema,
  createUserSessionSchema,
} from "./schemas/user.schema";
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
} from "./controllers/session.controller";

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
  app.delete("/api/sessions", requiresUser, invalidateUserSessionHandler);
};
