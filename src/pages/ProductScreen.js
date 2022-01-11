import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ProductScreen.css'
import { ShimmerPostDetails } from "react-shimmer-effects";
//state
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && id !== product._id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, product, id])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        navigate('/cart');
    }

    return (
        <div className='product-screen'>
            {loading ? <ShimmerPostDetails card cta variant="SIMPLE" /> : error ? <h2>{error}</h2> : (
                <div className='row mt-3'>
                    <div className='col-lg-7  col-md-12 col-sm-12 ' >
                        <div className="card mb-5" >
                            <div className='row'>
                                <div className='col-md-12'>
                                    <img className="img-fluid" src={product.imageUrl} alt="" style={{ height: '100%' }} />
                                </div>
                                <div className='col-md-12'>
                                    <div className="card-body">
                                        <div className='d-flex'>
                                            <h4 className="card-title">{product.name}</h4>
                                            <h4 className="card-title" style={{ marginLeft: 'auto' }}>price ${product.price}</h4>
                                        </div>
                                        <p className="card-text ">{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 col-sm-12'>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h4 className="card-title">Price: ${product.price}</h4>
                                <p className="card-text">Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'} </p>
                                <div className="mb-3">
                                    <label className="mb-3">Quantity</label>
                                    <select className="form-control" value={qty} onChange={(e) => setQty(e.target.value)}>
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <button className='btn' style={{ backgroundColor: 'gray', color: 'white' }} type='button ' onClick={addToCartHandler}> Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductScreen
