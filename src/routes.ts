import { Express, Request, Response } from "express";
import { createUserHandler } from "./controllers/user.controller";
import validateRequest from "./middlewares/validateRequest";
import { createUserSchema } from "./schemas/user.schema";

export default (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  // Register user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  // Login User

  // Get User's sessions

  // Logout
};
