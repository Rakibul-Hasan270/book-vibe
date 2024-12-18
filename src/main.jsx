import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <createBrowserRouter>
    <RouterProvider router={router}></RouterProvider>
  </createBrowserRouter>
)
