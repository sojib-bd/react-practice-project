import React from 'react';
import './Product.css'
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product)
    const { img, name, price, stock, seller } = props.product;
    return (
        <div className="product-container">

            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p><small>by: {seller}</small></p>
                <p>Price : ${price}</p>
                <p><small>only {stock} stocks are left- order soon</small></p>
                <button className="call-to-action"><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
            </div>



        </div>
    );
};

export default Product;