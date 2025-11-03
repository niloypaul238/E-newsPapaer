import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Marque from './Marque';
import { Link, useParams } from 'react-router';
import Adds from './Adds';
import { FaArrowLeft } from 'react-icons/fa';

const RootID = () => {
    let {id} =  useParams()
    let [detlsNews , setDetlsNews] = useState([])
    console.log(id);
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(res => res.json())
        .then(data => setDetlsNews(data.data))
    },[])
    console.log(detlsNews);
    return (
        <div className='w-11/12 mx-auto mt-6'>
            <Navbar></Navbar>
            <Marque></Marque>
            <div className='mt-14'>
                <div className='w-full sm:flex gap-x-5'>
                    <div className='w-[80%] sm:flex gap-x-3 space-y-2.5'>
                        <img src={detlsNews.length > 0 && detlsNews[0].thumbnail_url} className=' h-90 w-[60%] object-contain' alt="" />
                        <div>
                            <p className='text-2xl '>{detlsNews.length > 0 && detlsNews[0].title}</p>
                            <p className='text-gray-500 mt-4'>{detlsNews.length > 0 && detlsNews[0].details}</p>
                            <Link to={(-1)} className='flex  gap-x-4 mt-3 bg-pink-600 w-30 text-white p-1 rounded items-center '><FaArrowLeft />Back </Link>
                        </div>
                        
                    </div>
                    <div className='w-[20%]'><Adds></Adds></div>
                    
                </div>
            </div>
        </div>
    );
};

export default RootID;