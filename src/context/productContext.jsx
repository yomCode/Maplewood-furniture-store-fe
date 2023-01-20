import { createContext, useEffect, useState } from "react";
import { favoriteProducts } from "../products";

const ProductsContext = createContext()

const ProductProvider = ({ children }) => {
    const[products, setProducts] = useState([])

    useEffect(() => {
        setProducts(favoriteProducts)
    }, [])

    return( 
        <ProductsContext.Provider value={{products, setProducts}}>
            { children }
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductProvider }