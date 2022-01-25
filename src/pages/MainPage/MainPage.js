import React, {useEffect, useMemo, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import productsService from "../../API/ProductsService";
import Table from "../../components/Table/Table";
import TableList from "../../components/TableList/TableList";
import {useTotalCounter} from "../../hooks/useTotalCounter";

const MainPage = ({products, isProductLoading, productError, setTotalSum, setTotalQuantity,setCheckValue}) => {
    return (
        <div>
            <TableList productsAll={products} isLoading={isProductLoading} error={productError}
                       setTotalSum={setTotalSum}
                       setTotalQuantity={setTotalQuantity} setCheckValue={setCheckValue}/>
        </div>
    );
};

export default MainPage;