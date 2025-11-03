import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Adds = () => {
    return (
        <div>
            <div>
                <div className=' mb-10'>
                    <p className='font-semibold'>Login With</p>
                    <button className='flex mt-3  justify-center items-center gap-x-2 border border-blue-400 w-full rounded  bg-blue-100'><FaGoogle />Login with Google</button>
                    <button className='flex mt-3   justify-center items-center gap-x-2 border border-red-400 w-full rounded  bg-red-100'><FaGithub />Login with Github</button>
                </div>

                <div>
                    <p className='font-semibold mb-3'>Find us On</p>
                    <div>
                        <div className="max-w-xs border border-blue-400 rounded-md bg-white overflow-hidden">
                            {/* Facebook */}
                            <div className="flex items-center gap-3 p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition">
                                <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-blue-600">
                                <FaFacebookF />
                                </div>
                                <p className="text-gray-700 font-medium text-sm">Facebook</p>
                            </div>

                            {/* Twitter */}
                            <div className="flex items-center gap-3 p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition">
                                <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-sky-500">
                                <FaTwitter />
                                </div>
                                <p className="text-gray-700 font-medium text-sm">Twitter</p>
                            </div>

                            {/* Instagram */}
                            <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 transition">
                                <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-pink-500">
                                <FaInstagram />
                                </div>
                                <p className="text-gray-700 font-medium text-sm">Instagram</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='bg-gray-200 mt-10  px-4 py-10'>
                    <p className='mb-5 font-semibold text-lg'>Q-zone</p>
                    <div className='mt-8'>
                        <div className='w-[90%] border border-gray-300 z-10   relative mx-auto h-40 bg-white flex flex-col justify-center items-center rounded'>
                            <img src="src/assets/Rectangle 3991 (1).png" alt="" className='w-[80%] mx-auto z-60' />
                            <p className='z-50'>Class</p>
                            <div className='w-[100%] absolute z-1  rotate-7  mx-auto h-40 bg-white flex flex-col justify-center items-center rounded'></div>
                        </div>
                        
                    </div>
                        
                    <div className='mt-8'>
                        <div className='w-[90%] border border-gray-300 z-10   relative mx-auto h-40 bg-white flex flex-col justify-center items-center rounded'>
                            <img src="src/assets/Rectangle 3991.png" alt="" className='w-[80%] mx-auto z-60' />
                            <p className='z-50'>Swimming</p>
                            <div className='w-[100%] absolute z-1  rotate-7  mx-auto h-40 bg-white flex flex-col justify-center items-center rounded'></div>
                        </div>                        
                    </div>
                    <div className='mt-8'>
                        <div className='w-[90%] border border-gray-300 z-10   relative mx-auto h-40 bg-white flex flex-col justify-center items-center rounded'>
                            <img src="src/assets/Rectangle 3991 (2).png" alt="" className='w-[80%] mx-auto z-60' />
                            <p className='z-50'>Play Ground</p>
                            <div className='w-[100%] absolute z-1  rotate-7  mx-auto h-40 bg-white flex flex-col justify-center items-center rounded'></div>
                        </div>                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Adds;