import React, {useEffect, useMemo, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import productsService from "../../API/ProductsService";
import {useParams} from "react-router-dom";
import TableList from "../../components/TableList/TableList";
import {useTotalCounter} from "../../hooks/useTotalCounter";

const ChapterPage = ({products,isProductLoading,productError, setTotalSum, setTotalQuantity,setCheckValue}) => {

    const [currentProduct, setCurrentProduct] = useState([])

    const params = useParams()

    useEffect(() => {
        setCurrentProduct(products.filter((item) => item.urlalias === params.id))
    },[params,products])
    return (
        <div>
            <TableList productsAll={currentProduct} isLoading={isProductLoading} error={productError}
                       setTotalSum={setTotalSum} setCheckValue={setCheckValue}
                       setTotalQuantity={setTotalQuantity}/>
        </div>
    );
};

export default ChapterPage;