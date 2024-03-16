import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		// proxy: {
		// 	"/api": "https://voguelane.onrender.com",
		// },
		"/api": {
			target: "https://voguelane.onrender.com", // Replace with your API server URL
			changeOrigin: true,
			rewrite: (path) => path.replace(/^\/api/, ""),
		},
	},
});
