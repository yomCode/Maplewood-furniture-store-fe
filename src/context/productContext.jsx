import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const ProductsContext = createContext()

const ProductProvider = ({ children }) => {
    const[products, setProducts] = useState([])
    const[pageNumber, setPageNumber] = useState(0)
    const[pageElementSize, setPageElementSize] = useState(0)
    const[totalPages, setTotalPages] = useState(0)
    const[totalElements, setTotalElements] = useState(0)
    const[numOfElements, setNumOfElements] = useState(0)

    //fetch from db
    useEffect(() => {
    const allProductsUrl = `/products/paginated-all?pageNo=${pageNumber}`
        axios.get(allProductsUrl)
        .then((res) => {
            const data = res.data.data
            setProducts(data.content)
            setPageNumber(data.number)
            setPageElementSize(data.size)
            setTotalPages(data.totalPages)
            setTotalElements(data.totalElements)
            setNumOfElements(data.numberOfElements)

            console.log(data)
            
        })
        .catch((err) => console.log(err))
    }, [pageNumber])

    return( 
        <ProductsContext.Provider value={{ 
            products, 
            setProducts, 
            pageElementSize, 
            totalPages, 
            pageNumber, 
            setPageNumber, 
            totalElements,
            numOfElements
            }}>
            { children }
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductProvider }