import React, { createContext, useEffect, useState } from 'react'
import axios from './Axios'

export const productContext = createContext()
function Context(props) {
    const[product ,setProducts] = useState([]);
    const getproducts = async()=>{
        try {
            const {data} = await axios("/products")
            setProducts(data)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getproducts()
    },[])
  return (
    <productContext.Provider value={[product ,setProducts]}>
        {props.children}
    </productContext.Provider>
  )
}

export default Context