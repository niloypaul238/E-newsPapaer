import React, { useContext, useEffect, useState } from 'react';
import { ContCreact } from '../Context';
import { Link, Outlet } from 'react-router';
import NewsShow from './NewsShow';
import Adds from './Adds';

const Main = () => {

    let cata = useContext(ContCreact)
    let [toggle, setToggle] = useState("01")
    let catagory  = cata[0]
    //console.log(catagory);
     let [news , setNews] = useState([]) 
     useEffect(()=>{
            fetch(`https://openapi.programming-hero.com/api/news/category/${toggle}`)
            .then(res => res.json())
            .then(data => setNews(data.data))
        },[])

        let clickeHandle = (id) =>{
            setToggle(id)

            fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
            .then(res => res.json())
            .then(data => setNews(data.data))
        }
       // console.log(news);
    return (
        <div className='sm:flex relative w-[100]'>

            {/* catagory section */}
            <div className='w-[20%] top-0 sticky'>
                <p className='text-green-800 font-semibold'>All Catagory</p>
                <div className='flex  flex-col justify-start items-start space-y-1'>
                    {
                    catagory.map(catagori => <button  key={catagori.category_id} onClick={()=>clickeHandle(catagori.category_id)} id={catagori.category_id} className={`${toggle == catagori.category_id ? 'text-green-600' : 'text-gray-800'} cursor-pointer hover:text-green-800`}>{catagori.category_name}</button>)
                }
                </div>
                
            </div>
            <div className='w-[60%]'>
                {
                    news.length > 0 ? 
                
                news.map(singleNews => <NewsShow singleNews={singleNews}></NewsShow>) : <p className='text-3xl text-center text-gray-600'>No News available </p>
            
            }
            </div>
            <div className='w-[20%]'><Adds></Adds></div>

        </div>
    );
};

export default Main;