import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductsContext = createContext();

const ProductProvider = ({ children }) => {

    const[productUrl, setProductUrl] = useState("")
    const[products, setProducts] = useState([])
    const[pageNumber, setPageNumber] = useState(0)
    const[pageElementSize, setPageElementSize] = useState(0)
    const[totalPages, setTotalPages] = useState(0)
    const[totalElements, setTotalElements] = useState(0)
    const[numOfElements, setNumOfElements] = useState(0)

    //fetch from db
    useEffect(() => {
        if(productUrl.length > 0) {
            console.log("ProductContext: " + productUrl)
            const allProductsUrl = `${productUrl}?pageNo=${pageNumber}`
                axios.get(allProductsUrl)
                .then((res) => {
                    const data = res.data.data
                    setProducts(data.content)
                    setPageNumber(data.number)
                    setPageElementSize(data.size)
                    setTotalPages(data.totalPages)
                    setTotalElements(data.totalElements)
                    setNumOfElements(data.numberOfElements)
                })
                .catch((err) => console.log(err))
        }
    }, [pageNumber, productUrl])

    return( 
        <ProductsContext.Provider value={{ 
            products, 
            setProducts, 
            pageElementSize, 
            totalPages, 
            pageNumber, 
            setPageNumber, 
            totalElements,
            numOfElements,
            setProductUrl
            }}>
            { children }
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductProvider };
