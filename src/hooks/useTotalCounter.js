import React, {useState, createContext, useContext} from 'react'


const Context = createContext()


export const TotalCounterProvider = ({children}) => {

    const [quantitySum, setQuantitySum] = useState(0)
    const [priceSum, setPriceSum] = useState(0)
    const [itemsToCart, setItemsToCart] = useState([])

    const changeTotalCounter = (totalQuantity, totalSum) => {
        setQuantitySum(totalQuantity)
        setPriceSum(totalSum)
    }

    return <Context.Provider
        value={{quantitySum, priceSum, changeTotalCounter, setItemsToCart, itemsToCart}}>{children}</Context.Provider>
}

export const useTotalCounter = () => useContext(Context)