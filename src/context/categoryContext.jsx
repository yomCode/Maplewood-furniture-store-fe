import { createContext, useCallback, useEffect, useState } from "react";
import axios from 'axios'
import { apiDeleteAuthorization, apiGet, apiPostAuthorization } from "../utils/api/axios";

import { errorNotification, 
        successNotification } 
    from "../components/Notification";

export const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
    const[categoryUrl, setCategoryUrl] = useState("")
    const[subcategories, setSubcategories] = useState([])
    const[categories, setCategories] = useState([])
    const[singleSubcategories, setSingleSubcategories] = useState([])


    //PICKUP CENTERS
    const[pickupCenters, setPickCenters] = useState([])
    const[pageNumber, setPageNumber] = useState(0)
    const[pageElementSize, setPageElementSize] = useState(0)
    const[totalPages, setTotalPages] = useState(0)
    const[totalElements, setTotalElements] = useState(0)
    const[numOfElements, setNumOfElements] = useState(0)
    const[fetching, setFetching] = useState(true)
    const[singlePickupCenter, setSinglePickupCenter] = useState([])


    //STATES
    const[states, setStates] = useState([])
    const[singleState, setSingleState] = useState()

    useEffect(() => {
        const subCategoriesUrl = `/subcategory/view-all`
        axios.get(subCategoriesUrl)
        .then(res => {
            console.log(res.data)
            setSubcategories(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

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

    /**=======PICKUP CENTERS=========== */
    const getPickupCenters = () => {
        setFetching(true)
        apiGet(`pickup/all?${pageNumber}`)
        .then(res => {
            const data = res.data
            setPickCenters(data.content)
            setPageNumber(data.number)
            setPageElementSize(data.size)
            setTotalPages(data.totalPages)
            setTotalElements(data.totalElements)
            setNumOfElements(data.numberOfElements)
            setFetching(false)
        })
        .catch(err => {
            setFetching(false)
            console.log(err)
        })
    }

    const getPickupCentersCallback = useCallback(() => {
        setFetching(true)
        apiGet(`pickup/all?${pageNumber}`)
        .then(res => {
            const data = res.data
            setPickCenters(data.content)
            setPageNumber(data.number)
            setPageElementSize(data.size)
            setTotalPages(data.totalPages)
            setTotalElements(data.totalElements)
            setNumOfElements(data.numberOfElements)
            setFetching(false)
        })
        .catch(err => {
            console.log("Loading the getPickup callback failed")
            setFetching(false)
            console.log(err)
        })
    }, [pageNumber])

    useEffect(() => {
        getPickupCentersCallback()
    }, [getPickupCentersCallback])


    const createNewPickupCenter = (setSubmitting, onClose, newPickupCenter) => {
        setSubmitting(true);
        apiPostAuthorization("pickup/new", newPickupCenter)
        .then(res => {
            console.log(res.data);
            onClose();
            successNotification("newProduct Successfully Added", `${newPickupCenter.name} was added to the system.`)
            getPickupCenters();
        })
        .catch(err => {
            console.log(err)
            console.log(err.status)
            if(err.response.status === 401)
                errorNotification("UnAuthorized", "Contact your admin for access.", "topLeft")
            if(err.response.status >= 500)
                errorNotification("Internal Server Error", "Not connected", "topLeft")
            else errorNotification("No Access", "An Errr Occurred", "topLeft")
        })
        .finally(() => {
            setSubmitting(false)
        });
    }


    const updatePickUpCenter = () => {

    }

    /*****=============STATE===================*****/
     const createNewState = (setSubmitting, onClose, newState) => {
        setSubmitting(true);
        apiPostAuthorization("state/admin/create_state", newState)
        .then(res => {
            console.log(res.data);
            onClose();
            successNotification("newProduct Successfully Added", `${newState.name} was added to the system.`)
            getPickupCenters();
        })
        .catch(err => {
            console.log(err)
            console.log(err.status)
            if(err.response.status === 401)
                errorNotification("UnAuthorized", "Contact your admin for access.", "topLeft")
            if(err.response.status >= 500)
                errorNotification("Internal Server Error", "Not connected", "topLeft")
            else errorNotification("No Access", "An Errr Occurred", "topLeft")
        })
        .finally(() => {
            setSubmitting(false)
        });
    }

    const deleteState = (stateId) => {
        apiDeleteAuthorization(`state/admin/delete_state${stateId}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getAllStates = () => {
        apiGet(`state/view-states`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const updateState = () => {

    }


    return <CategoryContext.Provider value={{ 
        subcategories, 
        categories,
        setCategoryUrl,
        setSingleSubcategories,
        singleSubcategories,
        setSubcategories,
        singlePickupCenter,
        setSinglePickupCenter,
        pageElementSize, 
        totalPages, 
        pageNumber, 
        setPageNumber, 
        totalElements,
        numOfElements,
        fetching,
        pickupCenters,
        getPickupCenters,
        createNewPickupCenter,
        updatePickUpCenter,
        states,
        singleState,
        setSingleState,
        createNewState,
        getAllStates,
        deleteState,
        updateState,

        }}>
        { children }
    </CategoryContext.Provider>
}