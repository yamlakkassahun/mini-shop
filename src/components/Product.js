import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({ imageUrl, name, price, description, productId }) => {
    return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
            <div className="card mb-3">
                <img src={imageUrl} alt={name} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text text-justify">{description.substring(0, 80)}... </p>
                    <h4 className="card-title">price {price}</h4>
                </div>
                <div className="card-body text-center">
                    <Link to={`/product/${productId}`} className="btn btn-primary" style={{ width: '100%', backgroundColor: 'gray', border: 'none' }}>View</Link>
                </div>
            </div>
        </div>
    )
}

export default Product
