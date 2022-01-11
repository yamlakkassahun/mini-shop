import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/cartReducers";
import { getProductsReducer, getProductDetails } from "./reducers/productReducer";

//create reducer or state
const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetails
})
//thunk is a middleware that help as do async requests in our actions
const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

//we can set initial values 
const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLocalStorage
    }
}

const store = createStore(
    reducer,
    //initial state
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;