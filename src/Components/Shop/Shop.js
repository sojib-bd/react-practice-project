import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([]);

    const addItem = (product) => {
        //console.log(product);
        const newCart = [...cart, product];
        setCart(newCart)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;