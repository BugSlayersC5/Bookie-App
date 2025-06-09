import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Home from './pages/Home';
import ViewBook from "./pages/ViewBook";
import EditBook  from "./pages/EditBook";
import CreateBook from "./pages/CreateBook";
import BooksPage from "./pages/BooksPage";
import NotFound from "./pages/NotFound";


const bookieAppRouter = createBrowserRouter(
  [
    {path: '/', element: <Home />},
    {path: '/view-book', element: <ViewBook />},
    {path: '/edit-book', element: <EditBook />},
    {path: '/create-book', element: <CreateBook />},
    {path: '/books-page', element: <BooksPage />},
    {path: '*', element: <NotFound />}
  ]
)

export default function App() {
  return (
    <>
        <RouterProvider router={bookieAppRouter} />
    </>
  )
}


