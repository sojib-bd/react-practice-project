import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {

    const { productKey } = useParams();
    const product = fakeData.find(x => x.key === productKey);
    console.log(product)

    return (

        <div>
            <h1>product details</h1>
            <Product product={product}></Product>

        </div>
    );
};

export default ProductDetail;