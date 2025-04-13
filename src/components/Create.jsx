import React, { useState } from 'react'
import { productContext } from '../assets/Context';
import { useContext } from 'react';
function Create() {
    const[title ,setTitle] = useState()
    const[image,setimage] = useState()
    const[category ,setCategroy] = useState()
    const[price , setPrice] = useState()
    const[description , setDescription] = useState()
    const [product , setProducts] = useContext(productContext);
    
    
    const submitHandler= (val)=>{
        val.preventDefault();
        const newProduct = {
            title,
            image,
            category,
            price,
            description
        }
        setProducts([...product , newProduct])
        console.log(product);
        
        
    }
    
  return (

   <form onSubmit={submitHandler} className='w-[75%] h-[70%]  top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] absolute gap-5  flex flex-col justify-center items-center' action="">
    <div className=' w-full px-60'>
    <h1 className='font-semibold text-3xl place-items-start '>Add new product</h1>

    </div>
    <input className='bg-zinc-100 w-[60%] px-5 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400' onChange={(event) =>setimage(event.target.value)} type="url" placeholder='image Link'   />
    <input className='bg-zinc-100 w-[60%] px-5 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400' onChange={(event) =>setTitle(event.target.value)} type="text" placeholder='title'   />
    <div className='w-full  flex justify-center gap-7   '>
    <input className='bg-zinc-100 w-[29%]  px-5 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'onChange={(event) =>setCategroy(event.target.value)} type="text" placeholder='category'   />
    <input className='bg-zinc-100 w-[29%] px-5 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400' onChange={(event) =>setPrice(event.target.value)} type="number" placeholder='price'   /> 
    </div>
    <textarea
  className='bg-zinc-100 h-40 w-[60%] px-5 py-3 text-start align-text-top resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 '
  placeholder='Enter product description here' onChange={(event) =>setDescription(event.target.value)}/>
    <div className=' w-full px-56'>
    <button to="/create" className=' mt-2 px-4 py-1 border border-blue-400'>Add new  Products</button>

    </div>


   </form>
)
}

export default Create