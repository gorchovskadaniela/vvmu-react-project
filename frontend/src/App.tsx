import { createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import './App.css'
import {Layout} from "./pages/Layout.tsx";
import {Home} from "./pages/Home.tsx";
import {Blog} from "./pages/Blog.tsx";
import {Contacts} from "./pages/Contacts.tsx";
import {NotFound} from "./pages/NotFound.tsx";
import {Form} from "./pages/Form.tsx";

const AppLayout = () => (
  <>
    <Layout />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contacts',
        element: <Contacts />
      },
      {
        path: '/',
        element: <Home />,
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
