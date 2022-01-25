import React, {useEffect, useMemo, useState} from 'react';
import './TableList.scss'
import Loading from '../../img/Loading.svg'
import Table from "../Table/Table";
import {useTotalCounter} from "../../hooks/useTotalCounter";

const TableList = ({productsAll, isLoading, error, setTotalSum,
                       setTotalQuantity, setCheckValue}) => {


    if (error) {
        return (
            <div>
                <h2 style={{color: 'red'}}>Error</h2>
            </div>
        )
    } // В случае ошибки

    if (isLoading) {
        return (
            <div className='loading'>
                <img src={Loading}/>
            </div>

        )
    } // Загрузка

    return (
        <div>
            {
                productsAll.map(({goods, rname, rid}, index) => /*index !== productsAll.length - 1 &&*/
                    <Table products={goods} key={rid} name={rname} setTotalSum={setTotalSum}
                           setTotalQuantity={setTotalQuantity} setCheckValue={setCheckValue}/>)
            }
        </div>
    );
};

export default TableList;