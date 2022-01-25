import React from 'react';
import './Table.scss'
import Row from "./Row";

const Table = ({products, name, setTotalSum, setTotalQuantity, setCheckValue}) => {

    return (
        <table border='1'>
            <caption><h1>{name}</h1></caption>
            <th>Id</th>
            <th>Название товара</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
            {products.map(({gid, gname, gprice}) => <Row key={gid} gid={gid} gname={gname} gprice={gprice}
                                                         setTotalSum={setTotalSum}
                                                         setTotalQuantity={setTotalQuantity}
                                                         setCheckValue={setCheckValue}
            />)}
        </table>
    );
};

export default Table;