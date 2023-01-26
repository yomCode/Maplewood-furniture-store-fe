import { createContext, useCallback, useEffect, useState } from "react";
import axios from 'axios'
import { message } from "antd";
import { errorNotification, successNotification } from "../components/Notification";

const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
    const[productUrl, setProductUrl] = useState("/products/paginated-all")
    const[products, setProducts] = useState([])
    const[pageNumber, setPageNumber] = useState(0)
    const[pageElementSize, setPageElementSize] = useState(0)
    const[totalPages, setTotalPages] = useState(0)
    const[totalElements, setTotalElements] = useState(0)
    const[numOfElements, setNumOfElements] = useState(0)
    const[fetching, setFetching] = useState(true)
    const[singleProduct, setSingleProduct] = useState([])
    const[headerTitle, setHeaderTitle] = useState("Add New Product")


    const getProducts = () => {
        if(productUrl.length > 0) {
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
                    setFetching(false)
                })
                .catch((err) => {
                    console.log(err)
                    setFetching(false)
                })
        }
    }

    /** DELETE PRODUCT */
    const deleteProduct = (product) => {
        if(product.id !== undefined) {
            console.log(`id: ${product.id}`)
            axios.delete(`/admin/products/delete/${product.id}`)
            .then(res => {
              console.log(res);
              message.success(`PRODUCT ${product.name} HAS BEEN DELETED`);
              getProducts();
        
            })
            .catch(err => {
              const errorResponse = err.response;
              console.log(err);
              // message.error(errorResponse.errorMessage);
            })
          }
    }

    /*** EDIT PRODUCT **/
    const editProduct = (onClose, product) => {
        console.log("Edit product Link clicked: " + singleProduct.id)
        axios.put(`/admin/products/update/${singleProduct.id}`, product)
        .then(res => {
            console.log(res)
            onClose()
            getProducts()
        }).catch(err => {
            console.log(err)
        })
    }

    const fetchSingleProduct = (id) => {
        axios.get(`/admin/products/${id}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const addNewProduct = (setSubmitting, onClose, newProduct) => {
        setSubmitting(true);
        axios.post("/admin/products/new", newProduct)
        .then(res => {
            console.log(res.data);
            onClose();
            successNotification("newProduct Successfully Added", `${newProduct.name} was added to the system.`)
            getProducts();
        })
        .catch(err => {
            console.log(err)
            console.log(err.status)
            if(err.response.status === 401)
                errorNotification("UnAuthorized", "Contact your admin for access.", "topLeft")
            if(err.response.status >= 500)
                errorNotification("Internal Server Error", "Not connected", "topLeft")
            else errorNotification("No Access", "Contact your admin for access.", "topLeft")
        })
        .finally(() => {
            setSubmitting(false)
        });
    }

    const getProductsCallback = useCallback(
      () => {
        getProducts()
      },
      [productUrl, pageNumber],
    )
    

    //fetch from db
    useEffect(() => {
        getProductsCallback()
    }, [getProductsCallback])

    

    return( 
        <ProductsContext.Provider value={{ 
            products, 
            singleProduct,
            setProducts, 
            pageElementSize, 
            totalPages, 
            pageNumber, 
            setPageNumber, 
            totalElements,
            numOfElements,
            setProductUrl,
            fetching,
            setFetching,
            getProducts,
            deleteProduct,
            editProduct,
            addNewProduct,
            setSingleProduct,
            setHeaderTitle,
            headerTitle,
            }}>
            { children }
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductProvider };
