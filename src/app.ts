import express from 'express';
import { requireApiKey } from './middleware/auth.js';
import { errorHandler } from './middleware/errorHandler.js';
import projectsRouter from './routes/projects.js';
import usersRouter from './routes/users.js';

// Create Express application
const app = express();

// ============================================
// GLOBAL MIDDLEWARE
// ============================================

// Parse JSON request bodies
app.use(express.json());

// API key authentication - all routes require valid API key
app.use(requireApiKey);

// ============================================
// ROUTES
// ============================================

// Mount routers
app.use('/projects', projectsRouter);
app.use('/users', usersRouter);

// ============================================
// ERROR HANDLING
// ============================================

// Global error handler - must be last
app.use(errorHandler);

export default app;

