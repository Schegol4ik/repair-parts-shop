import React, {useMemo} from 'react';
import './Basket.scss'
import {useTotalCounter} from "../../hooks/useTotalCounter";


const Basket = ({sum, quantity, addBasket}) => {



        return (
        <div className='wrapper--basket'>
            <div className='basket__content'>
                <h7>Общая сумма</h7>
                {sum} RUB
            </div>
            <div className='basket__content'>
                <h7>Общее количество</h7>
                {quantity}
            </div>
            <button onClick={addBasket}>В корзину</button>
        </div>
    );
};

export default Basket;