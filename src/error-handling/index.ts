import { Application, Request, Response, NextFunction } from 'express';

const errorHandler = (app: Application): void => {
  app.use((req: Request, res: Response, next: NextFunction): void => {
    // this middleware runs whenever the requested page is not available
    res.status(404).json({ message: "This route does not exist" });
  });

  app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
    // whenever you call next(err), this middleware will handle the error
    // always logs the error
    console.error("ERROR", req.method, req.path, err);

    // only render if the error occurred before sending the response
    if (!res.headersSent) {
      res
        .status(500)
        .json({
          message: "Internal server error. Check the server console",
        });
    }
  });
};

export default errorHandler;
