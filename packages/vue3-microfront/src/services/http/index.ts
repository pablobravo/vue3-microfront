import axios from 'axios'

/**
 * HTTP Instance. Create as many instances
 * as you wish.
 * Also set here all your axios instance options.
 */
export const http = axios.create({
  baseURL: <string>import.meta.env.VITE_APP_BASE_URL
})
