import React, { useContext, useState } from 'react';
import { ContCreact } from '../Context';

const Main = () => {

    let cata = useContext(ContCreact)
    let [toggle, setToggle] = useState("01")
    let catagory  = cata[0]
    return (
        <div className='sm:flex w-[100]'>

            {/* catagory section */}
            <div className='w-[20%]'>
                <p className='text-green-800 font-semibold'>All Catagory</p>
                <div className='flex flex-col justify-start items-start space-y-1'>
                    {
                    catagory.map(catagori => <button id={catagori.category_id} className='cursor-pointer hover:text-green-800'>{catagori.category_name}</button>)
                }
                </div>
                
            </div>
            <div className='w-[60%]'>Outlet</div>
            <div className='w-[20%]'>ADDS</div>

        </div>
    );
};

export default Main;