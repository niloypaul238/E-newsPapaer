import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Compontnts/Router.jsx'
import { RouterProvider } from 'react-router'
import Context, { ContCreact } from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <Context>
     <RouterProvider router={router} />,
  </Context>
)
