import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'
import ListedBook from './components/ListedBook/ListedBook.jsx'
import ReadPage from './components/ReadPage/ReadPage.jsx'
import ViewBooksDetail from './components/ViewBooksDetail/ViewBooksDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/listedBook',
        element: <ListedBook></ListedBook>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/read',
        element: <ReadPage></ReadPage>
      },
      {
        path: '/bookList/:bookId',
        element: <ViewBooksDetail></ViewBooksDetail>,
        loader: () => fetch('/books.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <createBrowserRouter>
    <RouterProvider router={router}></RouterProvider>
  </createBrowserRouter>
)
