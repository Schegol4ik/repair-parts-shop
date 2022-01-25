import React, {useEffect, useState} from 'react';
import './NavBar.scss'
import {useFetching} from "../../hooks/useFetching";
import productsService from "../../API/ProductsService";
import {useNavigate} from "react-router-dom";

const NavBar = () => {

    const [products, setProducts] = useState([])

    const [fetchProducts] = useFetching(async () => {
        const response = await productsService.getAll()
        setProducts(response.data)
    })

    useEffect(() => {
        fetchProducts()
    }, [setProducts])

    let navigate = useNavigate()


    return (
        <div className='wrapper--navBar'>
            <span onClick={(e) => {
                e.preventDefault()
                navigate('/')}}>На главную</span>
            {products.map((item) => <span  onClick={(e) => {
                e.preventDefault()
                navigate(`/category/${item.urlalias}`)
            }}>
                {item.rname}
            </span>)}
        </div>
    );
};

export default NavBar;