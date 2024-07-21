import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//import component files
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Error from './components/error/Error.jsx';
import Home from './components/home/Home.jsx';
import Projects from './components/projects/Projects.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Projects',
        element: <Projects />
      }
    ]
  }


]);











ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)









// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


