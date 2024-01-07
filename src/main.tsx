import { SignUpPage } from '@/pages/SignUpPage'
import { UserPage } from '@/pages/UserPage'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/user/:name',
    element: <UserPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
