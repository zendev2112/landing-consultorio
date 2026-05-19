import { ViteReactSSG } from 'vite-react-ssg'
import App from './App'
import './styles/global.css'

export const createRoot = ViteReactSSG({
  basename: '/',
  routes: [{ path: '/', Component: App }],
})
