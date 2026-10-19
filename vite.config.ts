import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import jsonServer from 'json-server'
import { defineConfig, type Plugin } from 'vite'

/**
 * The mock backend, inside the dev server: json-server answers everything under `/api` from
 * backend-mock/data.json. In Piggybank json-server is a second terminal on port 3000; here it rides
 * along with Vite, so there is one command and one port, and the StackBlitz preview opens on the app.
 */
const mockBackend = (): Plugin => ({
  name: 'mock-backend',
  configureServer(server) {
    const api = jsonServer.create()
    api.use(jsonServer.defaults({ logger: false }))
    api.use(jsonServer.router('backend-mock/data.json'))
    server.middlewares.use('/api', api)
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mockBackend()],
  resolve: {
    // `@/` means `src/`, so an import says where a file lives: `@/features/cart/components/Cart`.
    // tsconfig.app.json repeats this for TypeScript, .oxlintrc.json builds the import rule on it.
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
