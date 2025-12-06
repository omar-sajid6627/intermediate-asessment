import type { RequestHandler } from 'express';

// The valid API key for authentication
// In a real application, this would come from environment variables
const VALID_API_KEY = 'test-api-key-12345';

/**
 * Middleware that validates the API key from the request header.
 * 
 * Expected behavior:
 * - Check for the 'x-api-key' header in the request
 * - If the header is missing or the value doesn't match VALID_API_KEY:
 *   - Respond with status 401
 *   - Send JSON: { "error": "Unauthorized" }
 * - If the API key is valid, call next() to continue to the next middleware/handler
 */
export const requireApiKey: RequestHandler = (req, res, next) => {
  // TODO: Implement API key validation
  // Hint: Use req.header('x-api-key') or req.headers['x-api-key']
  next(new Error('Not implemented yet'));
};

