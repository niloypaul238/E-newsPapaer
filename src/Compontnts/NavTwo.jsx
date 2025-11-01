import React from 'react';
import { Link } from 'react-router';

const NavTwo = () => {
    return (
        
        <div className='flex justify-between items-center mt-5'>
            <div></div>
            <div className='flex gap-x-7 text-gray-700 font-semibold'>
                <button>Home</button>
                <button>About</button>
                <button>Carrer</button>
            </div>
            <div className='flex gap-x-3'>
                <img src="src/assets/index 1.png" alt="" />
                <button className='bg-gray-600 text-white px-8 rounded cursor-pointer hover:bg-gray-700'>Login</button>
            </div>
            
        </div>
    );
};

export default NavTwo;