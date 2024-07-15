import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

const FRONTEND_URL: string = process.env.ORIGIN || "http://localhost:3000";

// Middleware configuration
export default (app: express.Application): void => {
  // Because this is a server that will accept requests from outside and it will be hosted on a server with a `proxy`, express needs to know that it should trust that setting.
  // Services like Heroku use something called a proxy and you need to add this to your server
  app.set("trust proxy", 1);

  // Controls a very specific header to pass headers from the frontend
  app.use(
    cors({
      origin: [FRONTEND_URL]
    })
  );

  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
