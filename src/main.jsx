import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';

let router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    ErrorBoundary: () => <div>Something went wrong</div>,
  },
  // {
  //   path: '/home',
  //   element: // Enter Home Element
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
