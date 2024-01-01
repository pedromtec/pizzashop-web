import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/app/dashboard'
import { Signin } from './pages/auth/sign-in'
import { ErrorPage } from './pages/error-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-in',
    element: <Signin />,
  },
])
