import React from 'react';
import './Product.css'
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props.product)
    const { img, name, price, stock, seller, key } = props.product;


    return (
        <div className="product-container">

            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div>
                <p><Link to={"/product/" + key}>{name}</Link></p>
                <p><small>by: {seller}</small></p>
                <p>Price : ${price}</p>
                <p><small>only {stock} stocks are left- order soon</small></p>
                <button className="call-to-action" onClick={() => props.addItem(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
            </div>



        </div>
    );
};

export default Product;