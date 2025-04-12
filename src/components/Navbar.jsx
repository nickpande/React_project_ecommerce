import React from 'react'
import { useContext } from 'react';
import { productContext } from '../assets/Context';
import { Link } from 'react-router-dom';
function Navbar() {
      const [product] = useContext(productContext);

      if (!product) return <div>Loading...</div>; // Handle initial null state
      
      // No need to use reduce, just map directly
      const categories = product.map(item => item.category);
      
      // Remove duplicates
      const uniqueCat = [...new Set(categories)];
      
      function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      

  
  return (
    <div className='h-screen  w-[15%] bg-zinc-100  flex  items-center flex-col'>
      <button className=' mt-5 px-4 py-2 border border-blue-400'>Add new  Products</button>
      <hr />
      <hr className="w-full mt-4 border-gray-300" />

      <h1 className='text-2xl mt-4 font-semibold'>Category</h1>
      <ul className='flex flex-col gap-1'>
        {
          uniqueCat.map((cat,index)=>{
            return(
              <Link to={`/?category=${cat}`} className=' item-center py-2  items-baseline px-2  inline-flex hover:bg-gray-200'>
                 <span className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: getRandomColor() }}></span>
                 {cat} 
              </Link>
            )
          })
        }
     
      
      </ul>
    </div>
  )
}

export default Navbar