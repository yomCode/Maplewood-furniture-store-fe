import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
    const[categoryUrl, setCategoryUrl] = useState("")
    const[subcategories, setSubcategories] = useState([])
    const[categories, setCategories] = useState([])
    const[singleSubcategories, setSingleSubcategories] = useState([])

    // useEffect(() => {
    //     const subCategoriesUrl = `/subcategory/view-all`
    //     axios.get(subCategoriesUrl)
    //     .then(res => {
    //         console.log(res.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }, [])

    useEffect(() => {
        if(categoryUrl){
            axios.get(categoryUrl)
            .then(res => {
              console.log(res.data)
              setSingleSubcategories(res.data)
         })
        .catch(err => {
            console.log(err)
            })
        }
      }, [categoryUrl])


    useEffect(() => {
        const categoriesUrl = `/category/all`
        axios.get(categoriesUrl)
        .then(res => {
            console.log(res.data)
            setCategories(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    return <CategoryContext.Provider value={{ 
        subcategories, 
        categories,
        setCategoryUrl,
        setSingleSubcategories,
        singleSubcategories,
        setSubcategories
        
        }}>
        { children }
    </CategoryContext.Provider>
}