import axios from 'axios'

// lib/: a third-party library, configured once for this app. `/api` is the mock backend, which runs
// inside the Vite dev server (see vite.config.ts).
export const http = axios.create({ baseURL: '/api' })
