import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([]);

    const addItem = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className='shop-container'>
            <div className="productDetail">
                {products.map(x => <Product
                    product={x}
                    key={x.key}
                    addItem={addItem}
                ></Product>)}

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="call-to-action">Review order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;