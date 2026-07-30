import { defineConfig } from "vite"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  server: {
    allowedHosts: ["whid-nooser-graal-4173.on.ascii.dev"],
  },
});
