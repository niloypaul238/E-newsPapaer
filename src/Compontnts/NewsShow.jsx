import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { ContCreact } from '../Context';
import { FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsShow = ({singleNews}) => {

    //console.log(news);
        //let dataUseContext = useContext(ContCreact)

        let catagoryId = useParams()

        // console.log(singleNews._id);
       
        //  News fetch
       
    return (

        <div className=" w-10/12 mx-auto mb-3 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={singleNews.author?.img}
            alt={singleNews.author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-gray-800 font-semibold text-sm">{singleNews.author?.name}</h2>
            <p className="text-gray-500 text-xs">
              {new Date(singleNews.author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer hover:text-blue-500" />
      </div>

      {/* Title */}
      <h3 className="px-4 text-[15px] font-bold text-gray-900 leading-snug">
        {singleNews.title}
      </h3>

      {/* Thumbnail */}
      <div className="px-4 py-2 w-full h-100 ">
        <img
          src={singleNews.thumbnail_url}
          alt={singleNews.title}
          className="rounded-lg w-full h-full object-contain  -z-10"
        />
      </div>

      {/* Details */}
      <div className="px-4 pb-3 text-gray-600 text-sm leading-relaxed">
        {singleNews.details.length > 180 ? singleNews.details.slice(0, 180) + "..." : singleNews.details}
        <Link to={`/${singleNews._id}`} className="text-orange-500 font-semibold hover:underline ml-1">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
        <div className="flex items-center text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.round(singleNews.rating.number) ? "text-orange-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-700 font-semibold text-sm">
            {singleNews.rating.number}
          </span>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <FaEye className="mr-1" />
          {singleNews.total_view}
        </div>
      </div>
        </div>
    );


};

export default NewsShow;