import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	// Relative asset paths so the build works under the GitHub Pages project path (/rock-genres/) or any other.
	base: './',
	plugins: [react()],
	test: {
		environment: 'node'
	}
});
