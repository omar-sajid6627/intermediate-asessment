import type { ErrorRequestHandler } from 'express';

/**
 * Global error handling middleware for the Express application.
 * 
 * Expected behavior:
 * - Log the error to the console (console.error)
 * - Respond with status 500
 * - Send JSON: { "error": "Internal Server Error" }
 * 
 * Note: This is an Express error handler, which has 4 parameters:
 * (err, req, res, next)
 */
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // TODO: Implement error handling
  // Hint: Remember to log the error and send a 500 response
  next(err);
};

