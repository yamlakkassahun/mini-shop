import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

//state
import { useSelector } from 'react-redux'

const Navbar = () => {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>MERN</Link>
                <button style={{ border: 'none' }} className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 text-center" style={{ marginLeft: 'auto' }}>
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>Home <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  position-relative" to={'/cart'}>
                                Cart
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: 'gray'}}>
                                {getCartCount()}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
