import React from 'react';
import Navbar from './Navbar';
import Marque from './Marque';
import NavTwo from './NavTwo';
import { Outlet } from 'react-router';

const Roots = () => {
    return (
        <div className='w-11/12 mx-auto mt-6'>
            <Navbar></Navbar>
            <Marque></Marque>
            <NavTwo></NavTwo>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;