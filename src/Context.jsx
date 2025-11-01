import React, { createContext, useEffect, useState } from 'react';

export let ContCreact = createContext()



const Context = ({children}) => {

    let [catagoy , setCatagoy] = useState([])

    useEffect(()=>{
        fetch('http://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCatagoy(data.data.news_category))
    },[])
 
 
 
    return (
        <ContCreact.Provider value={[catagoy , setCatagoy]}>
            {children}
        </ContCreact.Provider>
    );
};

export default Context;