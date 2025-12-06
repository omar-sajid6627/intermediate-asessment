import { Router } from 'express';
import type { RequestHandler } from 'express';
import type { Project, ProjectWithTasks, CreateProjectData, ApiError } from '../types/index.js';

const router = Router();

/**
 * GET /projects
 * 
 * Returns all projects. Supports optional filtering by owner.
 * 
 * Query Parameters:
 * - ownerId (optional): Filter projects by owner's user ID
 * 
 * Response: 200 OK
 * - Body: Array of Project objects
 * 
 * Example:
 * GET /projects -> Returns all projects
 * GET /projects?ownerId=user-1 -> Returns only projects owned by user-1
 */
export const getProjects: RequestHandler<
  Record<string, never>,
  Project[],
  never,
  { ownerId?: string }
> = (req, res, next) => {
  // TODO: Implement this handler
  // Hint: Check req.query.ownerId to filter results
  next(new Error('Not implemented yet'));
};

/**
 * GET /projects/:id
 * 
 * Returns a single project by ID, including all its tasks.
 * 
 * URL Parameters:
 * - id: The project's unique identifier
 * 
 * Response: 200 OK
 * - Body: ProjectWithTasks object (project data + tasks array)
 * 
 * Response: 404 Not Found
 * - Body: { "error": "Project not found" }
 */
export const getProjectById: RequestHandler<
  { id: string },
  ProjectWithTasks | ApiError
> = (req, res, next) => {
  // TODO: Implement this handler
  // Hint: Use getProjectById and getTasksByProject from the store
  next(new Error('Not implemented yet'));
};

/**
 * POST /projects
 * 
 * Creates a new project.
 * 
 * Request Body:
 * - name (required): The project name
 * - ownerId (required): The owner's user ID
 * 
 * Response: 201 Created
 * - Body: The newly created Project object
 * 
 * Response: 400 Bad Request
 * - Body: { "error": "Name and ownerId are required" }
 */
export const createProject: RequestHandler<
  Record<string, never>,
  Project | ApiError,
  CreateProjectData
> = (req, res, next) => {
  // TODO: Implement this handler
  // Hint: Validate req.body has name and ownerId before creating
  next(new Error('Not implemented yet'));
};

// Mount route handlers
router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/', createProject);

export default router;

