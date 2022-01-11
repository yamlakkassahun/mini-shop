import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './HomeScreen.css'
import { ShimmerPostList } from "react-shimmer-effects";

//components
import Product from '../components/Product'

// actions

import {getProducts as listProduct } from '../redux/actions/productActions';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        //this will dispatch the get product action
        dispatch(listProduct())
    }, [dispatch])

    return (
        <div className='home-screen '>
            <h2 className='mb-3 mt-3'>Latest Products</h2>
            <div className='list-group'>
                <div className='row'>
                    {loading ? <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} /> : error ? <h2> {error}</h2> : products.map(product => (
                        <Product 
                            key={product._id}
                            productId={product._id}
                            imageUrl={product.imageUrl}
                            description={product.description}
                            price={product.price}
                            name={product.name}
                        /> 
                    ))}  
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
