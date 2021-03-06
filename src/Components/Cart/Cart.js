import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0)

    let shipping = 0;
    if (total > 35) {
        shipping = 0
    }
    else if (total > 15) {
        shipping = 4.99
    }
    else if (total > 0) {
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const grandTotal = (total + shipping + Number(tax));
    return (
        <div>
            <h2>Order summary</h2>
            <h4>order Items: {cart.length} </h4>
            <p>price : {formatNumber(total)}</p>
            <p><small>Tax+ VAT: {tax}</small></p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
            <br />
            <Link to="/review">
                {props.children}

            </Link>
        </div>
    );
};

export default Cart;