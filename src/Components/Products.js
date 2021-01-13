import React from 'react';
import data from "../data/products";
import '../styles/Products.css';
import '../styles/global.css'
import { Link } from 'react-router-dom';


class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = data;
    }

    render() {
        return this.state.products.map((product) => {
            return (
                    <div className="productItem" key={product.id}>
                        <Link to={'/product/' + product.id}>
                        <div className="productImg">
                            <div className="stockTag">
                                <h6>Sold Out</h6>
                            </div>
                            <img src={product.image} alt=""/>
                            <div className="imgOverlay">
                                <h3 className="overlayText">View Details</h3>
                            </div>
                        </div>
                        <div className="productTxt">
                            <p>{product.title}</p>
                            <h6>{product.price}</h6>
                        </div>
                        </Link>
                    </div>
            )
        })
    }
}

export default Products;