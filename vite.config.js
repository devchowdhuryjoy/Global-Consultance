import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],

  server: {
    host: true, // Allow access from external devices on the network
    port: 5173, // Optional: You can change the port if needed
  },
});
