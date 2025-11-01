import React from 'react';
import { createBrowserRouter } from 'react-router';
import Roots from './Roots';
import Main from './Main';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
        {
            index: true,
            Component: Main
        }
    ]
    
  },
]);


export default router;