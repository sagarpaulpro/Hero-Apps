import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/main/root';
import Home from './Components/Main/Home';
import Cards from './Components/Cards/Cards';
import Error from './Components/Main/Error';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{index: true, loader: () => fetch('/data.json'), Component: Home},
      {
        path: '/Apps',
        loader: () => fetch('/data.json'),
        Component: Cards,
      },
      {
        path: '/Installation',
      },
      {
        path: '/AppDetails',
      },
      {
        path: '*',
        Component: Error,
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
