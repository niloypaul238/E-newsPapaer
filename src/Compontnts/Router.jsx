import React from 'react';
import { createBrowserRouter } from 'react-router';
import Roots from './Roots';
import Main from './Main';
import NewsShow from './NewsShow';
import RootID from './RootID';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    
    
  },{
    path: "/:id",
    Component: RootID,
    
    
  },
]);


export default router;