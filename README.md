# Express + TypeScript Coding Assessment

## Overview

This is a **Node.js + Express.js + TypeScript** coding assessment designed for **intermediate engineers** .

You will implement a REST API for a simple project management system with Users, Projects, and Tasks.

---

## What You Receive

- **`src/`** — Contains Express app structure with stub implementations (your work goes here)
- **`data/`** — JSON files acting as a mock database
- **`tests/`** — Vitest + Supertest test suite to validate your implementation
- **Configuration files** — `package.json`, `tsconfig.json`, `vitest.config.ts`

> ⚠️ **Note for Interviewers**: The `solutions/` directory contains fully implemented solutions and should NOT be shared with candidates. Run `npm run test:solutions` to verify the solutions pass all tests.

---

## Your Task

Implement the following components in the `src/` directory:

### 1. Database Layer (`src/db/store.ts`)

Implement helper functions to query the JSON data:
- `getAllUsers()` — Returns all users
- `getUserById(id)` — Returns a user by ID or undefined
- `getAllProjects()` — Returns all projects
- `getProjectById(id)` — Returns a project by ID or undefined
- `getProjectsByOwner(userId)` — Returns all projects owned by a user
- `getAllTasks()` — Returns all tasks
- `getTasksByProject(projectId)` — Returns all tasks for a project
- `createProject(data)` — Creates a new project in memory
- `createTask(data)` — Creates a new task in memory

### 2. Route Handlers (`src/routes/`)

#### Projects Routes (`src/routes/projects.ts`)
- `GET /projects` — List all projects (supports `?ownerId=` filter)
- `GET /projects/:id` — Get a project by ID with its tasks
- `POST /projects` — Create a new project

#### Users Routes (`src/routes/users.ts`)
- `GET /users/:id/summary` — Get user with their projects and task counts

### 3. Middleware (`src/middleware/`)

#### API Key Auth (`src/middleware/auth.ts`)
- Check for `x-api-key` header
- Valid key: `test-api-key-12345`
- Return `401` with `{ "error": "Unauthorized" }` if missing or invalid

#### Error Handler (`src/middleware/errorHandler.ts`)
- Catch unhandled errors
- Return `500` with `{ "error": "Internal Server Error" }`

---

## Rules

✅ **DO:**
- Implement all TODO sections
- Use proper TypeScript types (no `any`)
- Return appropriate HTTP status codes
- Handle edge cases (not found, invalid input)

❌ **DO NOT:**
- Change function signatures or return types
- Modify test files
- Change the project structure
- Use external databases

---

## Running the Project

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
npm test
```

All tests should pass when your implementation is complete.

### Run Development Server (Optional)

```bash
npm run dev
```

Server runs on `http://localhost:3000`

---

## API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | List all projects |
| GET | `/projects?ownerId=:id` | Filter projects by owner |
| GET | `/projects/:id` | Get project with tasks |
| POST | `/projects` | Create a new project |
| GET | `/users/:id/summary` | Get user summary with projects |

All endpoints require the `x-api-key` header (except the API returns 401 without it).

---

## Expected Response Shapes

### GET /projects/:id
```json
{
  "id": "proj-1",
  "name": "Website Redesign",
  "ownerId": "user-1",
  "tasks": [
    { "id": "task-1", "title": "Design mockups", "status": "done", "projectId": "proj-1" }
  ]
}
```

### GET /users/:id/summary
```json
{
  "user": { "id": "user-1", "name": "Alice Johnson", "role": "manager" },
  "projects": [
    { "id": "proj-1", "name": "Website Redesign", "ownerId": "user-1" }
  ],
  "taskCounts": {
    "proj-1": 3
  }
}
```

### POST /projects
Request:
```json
{ "name": "New Project", "ownerId": "user-1" }
```
Response (201):
```json
{ "id": "generated-id", "name": "New Project", "ownerId": "user-1" }
```

---

## Evaluation Criteria

1. **Correctness** — API behaves as specified
2. **HTTP Standards** — Proper status codes (200, 201, 400, 401, 404, 500)
3. **TypeScript** — Proper typing, no `any`
4. **Code Organization** — Clean, readable code
5. **Error Handling** — Graceful handling of edge cases

---

## Estimated Time

**60–90 minutes**

Good luck! 🚀

