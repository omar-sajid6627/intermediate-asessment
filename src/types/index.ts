/**
 * User entity representing a team member
 */
export interface User {
  id: string;
  name: string;
  role: 'developer' | 'manager';
}

/**
 * Project entity representing a work project
 */
export interface Project {
  id: string;
  name: string;
  ownerId: string; // References User.id
}

/**
 * Task entity representing a work item within a project
 */
export interface Task {
  id: string;
  projectId: string; // References Project.id
  title: string;
  status: 'todo' | 'in_progress' | 'done';
}

/**
 * Project with its associated tasks (joined data)
 */
export interface ProjectWithTasks extends Project {
  tasks: Task[];
}

/**
 * User summary with projects and task counts
 */
export interface UserSummary {
  user: User;
  projects: Project[];
  taskCounts: Record<string, number>;
}

/**
 * Data required to create a new project
 */
export interface CreateProjectData {
  name: string;
  ownerId: string;
}

/**
 * Data required to create a new task
 */
export interface CreateTaskData {
  projectId: string;
  title: string;
  status?: Task['status'];
}

/**
 * Standard API error response
 */
export interface ApiError {
  error: string;
}

