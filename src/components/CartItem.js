import React from 'react'
import { Link } from 'react-router-dom'
import './CartItem.css'
const CartItem = ({ item, qtyChangeHandler, removeFromCartHandler }) => {

    return (
        <div className="card mb-5" >
            <div className='row'>
                <div className='col-md-4 col-sm-12'>
                    <img className="img-fluid" src={item.imageUrl} alt="" />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className="card-body text-center mt-3">
                        <Link className='nav-link' to={`/product/${item.product}`}>
                            <h4 className="card-title">{item.name}</h4>
                        </Link>
                        <h4 className="card-title" style={{ marginLeft: 'auto' }}>price ${item.price}</h4>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className="card-body mb-3 mt-3">
                        <select className="form-control" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                            {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                            ))}
                        </select>
                        <Link to={''} className='btn mt-3' style={{ backgroundColor: 'gray', color: 'white', width: '100%' }} onClick={() => removeFromCartHandler(item.product)}>Remove</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
