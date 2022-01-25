import React, {useEffect, useMemo, useState} from 'react';
import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";
import ChapterPage from "./pages/ChapterPage/ChapterPage";
import {useFetching} from "./hooks/useFetching";
import productsService from "./API/ProductsService";
import {useTotalCounter} from "./hooks/useTotalCounter";

const App = () => {

    const [products, setProducts] = useState([]) // Сохранение товаров
    const [totalSum, setTotalSum] = useState([]) // Сохраняем список с измененной суммой
    const [totalQuantity, setTotalQuantity] = useState([]) // Сохраняем список с измененным количеством
    const [sum, setSum] = useState(0) // Общая сумма
    const [quantity, setQuantity] = useState(0) // Общее количество
    const [dataLoad,setDataLoad] = useState(false)
    const [checkValue,setCheckValue] = useState(0)

    const [fetchProducts, isProductLoading, productError] = useFetching(async () => {
        const response = await productsService.getAll()
        setProducts(response.data)
    }) // Обработка полученных данных
    useEffect(() => {
        fetchProducts()
        setDataLoad(true)
    }, [setProducts]) // Получаем данные с сервера

    /*const itemsToCart = useMemo(() => {
        debugger

        let filterCart = totalQuantity.filter(items => items.quantity > 0)

        let item = {
            id: filterCart.map(({id})=> id),
            quantit: filterCart.map(({quantity})=> quantity)
        }
        return item
    },[totalQuantity]) // Фильтруем список перед отправкой*/


    useEffect(() => {
        debugger
        setSum(totalSum.reduce((acc, item) => acc + item.sum, 0))
        setQuantity(totalQuantity.reduce((acc, item) => acc + item.quantity, 0))
    }, [totalSum]) // Высчитываем и сохраняем значения для корзины


    useEffect(() => {
        if (products.length) {
            debugger
            setTotalSum(products.map(({goods}) => goods.map(({gid}) => ({
                id: gid,
                sum: 0
            }))).reduce((item, acc) => item.concat(acc)))
        }
    }, [products]) // Формируем массив объектов с суммой
    useEffect(() => {
        if (products.length) {
            debugger
            setTotalQuantity(products.map(({goods}) => goods.map(({gid}) => ({
                id: gid,
                quantity: 0
            }))).reduce((item, acc) => item.concat(acc)))
        }
    }, [products]) // Формируем массив объектов с количеством

    /*const handleAddBasket = () => {
        let idProduct = itemsToCart.id.join()

        let addBasket = {
            success: 'true',
            data: {
                product: {
                    [idProduct] : itemsToCart.quantit.join()
                }
            }
        }
        setSum(0)
        setQuantity(0)
    }*/

    return (
        <BrowserRouter>
            <div className='App--wrapper'>
                <Header/>
                <div className='App__content'>
                    <NavBar/>
                    <Routes>
                        <Route path="/"
                               element={<MainPage products={products} isProductLoading={isProductLoading}
                                                  productError={productError} setTotalQuantity={setTotalQuantity}
                                                  setTotalSum={setTotalSum} setCheckValue={setCheckValue}
                               />}/>
                        <Route path="/category/:id"
                               element={<ChapterPage products={products} isProductLoading={isProductLoading}
                                                     productError={productError} setTotalQuantity={setTotalQuantity}
                                                     setTotalSum={setTotalSum} setCheckValue={setCheckValue}/>}/>
                        <Route path="*" element={<div>ERROR 404!</div>}/>
                    </Routes>
                    <Basket sum={sum} quantity={quantity} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;