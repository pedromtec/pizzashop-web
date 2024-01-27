import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Toaster richColors />
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
