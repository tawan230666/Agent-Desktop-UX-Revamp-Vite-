import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './ui/design-system.css';
import App from './ui/App';
import Home from './ui/pages/Home';
import Compare from './ui/pages/Compare';
import Team from './ui/pages/Team';

const router = createBrowserRouter([
  { path:'/', element:<App/>, children:[
    { index:true, element:<Home/> },
    { path:'compare', element:<Compare/> },
    { path:'team', element:<Team/> },
  ]}
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
