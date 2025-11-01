import { format } from 'date-fns';
import React from 'react';

const Navbar = () => {
    let datafor = format(new Date, "EEEE , dd LLLL YYY");
    return (
        <div className='flex  flex-col justify-center items-center space-y-1.5'>
            <img src="../src/assets/The Dragon News.png" className='' alt="" />
            <p className='text-lg text-gray-600'>Journalism Without Fear or Favour</p>
            <p>{datafor}</p>
        </div>
    );
};

export default Navbar;