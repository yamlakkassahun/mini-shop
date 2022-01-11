import './CartScreen.css'
//component
import CartItem from '../components/CartItem'
//state
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
//actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    const getCountSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
    }

    return (
        <div className='cart-screen'>
            <div className='row mt-3'>
                <div className='col-lg-8 col-md-12 col-sm-12'>
                    <h4>Shopping Cart</h4>
                    <hr />
                    {cartItems.length === 0 ? (
                        <div>
                            <h4>Your cart is empty</h4>
                            <Link to={'/'} >Go To Shop</Link>
                        </div>
                    ) : cartItems.map((item) => (
                        
                        <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeFromCartHandler={removeFromCartHandler}/>
                    ))}
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <div className="card mb-5" style={{ maxHeight: '200px' }}>
                        <div className="card-body">
                            <div className='d-fle'>
                                <h4 className="card-title">Sub Total {getCartCount()} Items </h4>
                                <h4 className="card-title" style={{ marginLeft: 'auto' }}>Total ${getCountSubTotal()}</h4>
                            </div>
                            <hr />
                            <Link to={'/'} className='btn' style={{ backgroundColor: 'gray', color: 'white', width: '100%' }}>
                                Proceed to Check Out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
