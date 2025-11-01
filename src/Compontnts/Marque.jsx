import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className='bg-gray-100 p-2 flex gap-x-7 mt-7'>
            <button className='bg-red-500 text-white px-4 py-1 rounded text-2xl'>Latest</button>
            <Marquee>
                I can be a React component, multiple React components, or just some text. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, asperiores?
            </Marquee>
        </div>
    );
};

export default Marque;