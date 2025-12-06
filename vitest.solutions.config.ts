import { defineConfig } from 'vitest/config';
import path from 'path';

/**
 * Vitest configuration for testing the solutions directory.
 * This config remaps imports from 'src/' to 'solutions/' so the same
 * test file can be used to verify the solution implementations.
 */
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    testTimeout: 10000,
  },
  resolve: {
    alias: {
      // Redirect all src imports to solutions
      '../src/app.js': path.resolve(__dirname, 'solutions/app.ts'),
      '../src/db/store.js': path.resolve(__dirname, 'solutions/db/store.ts'),
    },
  },
});

