import React, { createContext, useEffect, useState } from 'react';

export let ContCreact = createContext()



const Context = ({children}) => {

    let [catagoy , setCatagoy] = useState([])
    let [news , setNews] = useState([])

// catagory fetch
    useEffect(()=>{
        fetch('http://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCatagoy(data.data.news_category))
    },[])
 
    //  News fetch
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => setNews(data.data))
    },[])
 
 
    return (
        <ContCreact.Provider value={[catagoy , setCatagoy ,news , setNews]}>
            {children}
        </ContCreact.Provider>
    );
};

export default Context;