import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Tags from './pages/Tags'
import Users from './pages/Users'
import Login from './pages/Login'
import ProtectedRoute from './components/auth/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'posts/:id', element: <PostDetail /> },
      { path: 'tags', element: <Tags /> },
      { path: 'login', element: <Login /> },
      {
        path: 'users',
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
      },
    ],
  },
], {
  basename: import.meta.env.DEV ? '/' : (import.meta.env.VITE_BASE_URL || '/'),
})

export default function App() {
  return <RouterProvider router={router} />
}