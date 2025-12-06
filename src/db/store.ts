import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import type { User, Project, Task, CreateProjectData, CreateTaskData } from '../types/index.js';

// Get the directory path for loading JSON files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, '../../data');

// Load initial data from JSON files
const usersData: User[] = JSON.parse(readFileSync(join(dataDir, 'users.json'), 'utf-8'));
const projectsData: Project[] = JSON.parse(readFileSync(join(dataDir, 'projects.json'), 'utf-8'));
const tasksData: Task[] = JSON.parse(readFileSync(join(dataDir, 'tasks.json'), 'utf-8'));

// In-memory storage (allows mutations during runtime)
let users: User[] = [...usersData];
let projects: Project[] = [...projectsData];
let tasks: Task[] = [...tasksData];

/**
 * Resets the in-memory data to the original JSON state.
 * Useful for testing to ensure a clean state between tests.
 */
export function resetData(): void {
  users = [...usersData];
  projects = [...projectsData];
  tasks = [...tasksData];
}

// ============================================
// USER FUNCTIONS
// ============================================

/**
 * Retrieves all users from the database.
 * @returns Array of all users
 */
export function getAllUsers(): User[] {
  // TODO: Implement this function
  throw new Error('Not implemented yet');
}

/**
 * Finds a user by their unique ID.
 * @param id - The user's unique identifier
 * @returns The user if found, undefined otherwise
 */
export function getUserById(id: string): User | undefined {
  // TODO: Implement this function
  throw new Error('Not implemented yet');
}

// ============================================
// PROJECT FUNCTIONS
// ============================================

/**
 * Retrieves all projects from the database.
 * @returns Array of all projects
 */
export function getAllProjects(): Project[] {
  // TODO: Implement this function
  throw new Error('Not implemented yet');
}

/**
 * Finds a project by its unique ID.
 * @param id - The project's unique identifier
 * @returns The project if found, undefined otherwise
 */
export function getProjectById(id: string): Project | undefined {
  // TODO: Implement this function
  throw new Error('Not implemented yet');
}

/**
 * Retrieves all projects owned by a specific user.
 * @param userId - The owner's user ID
 * @returns Array of projects owned by the user
 */
export function getProjectsByOwner(userId: string): Project[] {
  // TODO: Implement this function
  throw new Error('Not implemented yet');
}

/**
 * Creates a new project and adds it to the in-memory store.
 * Generates a unique ID for the new project.
 * @param data - The project data (name and ownerId)
 * @returns The newly created project with its generated ID
 */
export function createProject(data: CreateProjectData): Project {
  // TODO: Implement this function
  // Hint: Generate a unique ID (e.g., using Date.now() or a counter)
  throw new Error('Not implemented yet');
}

// ============================================
// TASK FUNCTIONS
// ============================================

/**
 * Retrieves all tasks from the database.
 * @returns Array of all tasks
 */
export function getAllTasks(): Task[] {
  // TODO: Implement this function
  throw new Error('Not implemented yet');
}

/**
 * Retrieves all tasks belonging to a specific project.
 * @param projectId - The project's unique identifier
 * @returns Array of tasks for the specified project
 */
export function getTasksByProject(projectId: string): Task[] {
  // TODO: Implement this function
  throw new Error('Not implemented yet');
}

/**
 * Creates a new task and adds it to the in-memory store.
 * Generates a unique ID for the new task.
 * If status is not provided, defaults to 'todo'.
 * @param data - The task data (projectId, title, optional status)
 * @returns The newly created task with its generated ID
 */
export function createTask(data: CreateTaskData): Task {
  // TODO: Implement this function
  // Hint: Generate a unique ID and default status to 'todo' if not provided
  throw new Error('Not implemented yet');
}

