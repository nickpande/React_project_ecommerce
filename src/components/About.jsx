import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { productContext } from '../assets/Context';

function About() {
  const {id} = useParams();
    const [product] = useContext(productContext);
  
  return (
    <div className='w-screen h-screen flex justify-center items-center p-[3%] bg-zinc-100'>
        <div className='w-[70%]  h-[100%] flex  shadow-md rounded-sm border-sm  gap-10 p-[3%]'>
        <div className='w-[60%] h-[80%]  mt-10 rounded  mb-5' style={{
           backgroundImage: `url(${product[id].image})`,
           backgroundSize: 'contain',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
        }}>
            <div>

            </div>
        </div>
        <div className=' flex flex-col mt-10 gap-2 py-20 w-[40%] '>
            <h1 className='text-3xl font-semibold'>{product[id].title}</h1>
            <p className='text-sm  text-zinc-500 font-semibold    '>{product[id].category}</p>
            <p className='text-pink-300'>{product[id].price}</p>
            <p className='text-sm font-semibold'>{product[id].description}</p>
            <div>
            <button className=' mt-5 px-4 py-1 border border-red-400 text-red-400'>edit</button>
            <button className=' mt-5 px-4 py-1 ml-5 border border-blue-400 text-blue-400'>delete</button>

            </div>
        </div>
    </div>
    </div>
  )
}

export default About