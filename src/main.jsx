import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/main/root';
import Home from './Components/Main/Home';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{index: true, Component: Home},
      {
        path: '/Apps',
      },
      {
        path: '/Installation',
      },
      {
        path: '/AppDetails',
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
