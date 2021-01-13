import React from 'react';
import Product from './Product';
import '../styles/ProductDetails.css';
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
    let {productId} = useParams();
    return (
        <div>
            {
                /*<div className="productContainer">
                ID: {productId}
            <Product productId={productId}/>
        </div> */
            }
            <Product productId={productId}/>
            <div className="productDetails">
                <div className="deliveryInfo">
                    <h2>Shipping & Payment</h2>
                    <p>Te vel mazim corpora contentiones, pri ut legere volumus. Vix zril decore apeirian te, unum tibique vim no. Etiam repudiandae definitionem eum ea, ne sed virtute sadipscing philosophia</p>
                </div>
            </div>
            <div className="viewAllButton">
                <p>Back To All Products List</p>
            </div>
        </div>
    );
};

export default ProductDetails;