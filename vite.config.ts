import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/'),
			'@server': path.resolve(__dirname, '../server/src'),
		},
	},
	plugins: [tsconfigPaths(), svgr(), react()],
});
