"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (app) => {
    app.use((req, res, next) => {
        // this middleware runs whenever the requested page is not available
        res.status(404).json({ message: "This route does not exist" });
    });
    app.use((err, req, res, next) => {
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
exports.default = errorHandler;
