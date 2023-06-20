import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main/Main.jsx';
import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage';
import SkillPage from './SkillPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: '/', element: <HomePage></HomePage> },
      { path: '/about', element: <AboutPage></AboutPage> },
      { path: '/skill', element: <SkillPage></SkillPage> },
      { path: '/projects', element: <ProjectsPage></ProjectsPage> },
      { path: '/contact', element: <ContactPage></ContactPage> },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
