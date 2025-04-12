import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { productContext } from '../assets/Context';

function Home() {
  const [product] = useContext(productContext);

  if (!product) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className='h-screen p-4 w-[85%] flex mt-10 overflow-x-hidden overflow-y-auto flex-wrap'>
        {product.length > 0 &&
          product.map((item) => (
            <div key={item.id} className="h-[40vh] w-[18%] mr-3 mb-4 bg-white px-4 py-4 flex flex-col shadow-md rounded-sm border-sm transition-transform duration-300 hover:scale-105">
              <div className='h-[70%] overflow-hidden mb-5' style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
              </div>
              <Link className='text-sm font-semibold hover:text-pink-400 text-center' to={`/about/${item.id-1}`}>
                {item.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
