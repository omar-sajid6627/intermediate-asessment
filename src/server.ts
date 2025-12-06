import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('');
  console.log('Available endpoints:');
  console.log('  GET  /projects          - List all projects');
  console.log('  GET  /projects?ownerId= - Filter projects by owner');
  console.log('  GET  /projects/:id      - Get project with tasks');
  console.log('  POST /projects          - Create a new project');
  console.log('  GET  /users/:id/summary - Get user summary');
  console.log('');
  console.log('Remember to include the x-api-key header: test-api-key-12345');
});

