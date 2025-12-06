import { Router } from 'express';
import type { RequestHandler } from 'express';
import type { UserSummary, ApiError } from '../types/index.js';

const router = Router();

/**
 * GET /users/:id/summary
 * 
 * Returns a comprehensive summary for a user, including:
 * - The user object
 * - All projects owned by the user
 * - Task counts for each project
 * 
 * URL Parameters:
 * - id: The user's unique identifier
 * 
 * Response: 200 OK
 * - Body: UserSummary object
 *   {
 *     user: User,
 *     projects: Project[],
 *     taskCounts: { [projectId: string]: number }
 *   }
 * 
 * Response: 404 Not Found
 * - Body: { "error": "User not found" }
 * 
 * Example response:
 * {
 *   "user": { "id": "user-1", "name": "Alice Johnson", "role": "manager" },
 *   "projects": [
 *     { "id": "proj-1", "name": "Website Redesign", "ownerId": "user-1" }
 *   ],
 *   "taskCounts": {
 *     "proj-1": 3
 *   }
 * }
 */
export const getUserSummary: RequestHandler<
  { id: string },
  UserSummary | ApiError
> = (req, res, next) => {
  // TODO: Implement this handler
  // Hint: 
  // 1. Get the user by ID
  // 2. Get all projects for this user
  // 3. For each project, count its tasks
  // 4. Build and return the UserSummary object
  next(new Error('Not implemented yet'));
};

// Mount route handlers
router.get('/:id/summary', getUserSummary);

export default router;

