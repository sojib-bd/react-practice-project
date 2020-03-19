import React, { useState, useEffect } from 'react';

import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {

        const savedCart = getDatabaseCart();
        console.log(savedCart)

        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts)

    }, [])
    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyImage} alt="" />
    }
    return (
        <div className="shop-container">
            <div className="productDetail">
                {cart.map(x => <ReviewItem
                    item={x}
                    removeItem={removeProduct}
                ></ReviewItem>)}
                {thankyou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="call-to-action" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>


        </div>
    );
};

export default Review;