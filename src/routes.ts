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
  getUserSessionsHandler,
} from "./controllers/session.controller";
import {
  createPostSchema,
  deletePostSchema,
  updatePostSchema,
} from "./schemas/post.schema";

export default (app: Express) => {
  /**
   * TEST ROUTES
   */
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  /**
   * USER AND AUTHENTICATION ROUTES
   */

  // Register user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  // Login User
  app.post(
    "/api/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  // Get User's sessions
  app.get("/api/sessions", requiresUser, getUserSessionsHandler);

  // Logout
  app.delete("/api/sessions", requiresUser, invalidateUserSessionHandler);

  /**
   * POSTS ROUTES
   */

  // Create a post
  app.post(
    "/api/posts",
    [requiresUser, validateRequest(createPostSchema)],
    createPostHandler
  );

  // Update a post
  app.post(
    "/api/posts",
    [requiresUser, validateRequest(updatePostSchema)],
    updatePostHandler
  );

  // Get a post
  app.get("/api/posts/:id", getPostHandler);

  // Delete a post
  app.delete(
    "/api/posts/:id",
    [requiresUser, validateRequest(deletePostSchema)],
    deletePostHandler
  );
};
