import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST});

        const { data } = await axios.get('http://localhost:5000/api/products')
        dispatch({             
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});

        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`)
        dispatch({             
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}


export const removeProductDetails = (id) => (dispatch) => {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET});
}