import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavigationBar from './Navigations/NavBar.jsx';
import About from './Navigations/About.jsx';
import Contact from './Navigations/Contact.jsx';
import LogIn from './Navigations/LogIn.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import User from './Navigations/User.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: "/user/:username",
    element: <User />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
