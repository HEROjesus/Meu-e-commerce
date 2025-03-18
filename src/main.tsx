import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Public from './routes/PublicRoutes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Public />
  </StrictMode>,
)
