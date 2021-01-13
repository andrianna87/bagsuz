import React from 'react';
import '../styles/global.css';
import '../styles/Product.css';
import data from "../data/products";
import {Link} from "react-router-dom";
import Arrow from "../icons/Arrow";

class Product extends React.Component {
    constructor(props) {
        super(props);
        const productItem = data;
        //console.log(this.props);
        this.state = productItem;
    }

    render() {

        const arrowStyle = {
            marginBottom: '-3',
            transform: 'rotate(-180deg)'
        };

        const product = this.state.products.find(product => {
            //console.log(product.id, this.props.productId);
            return product.id === parseInt(this.props.productId); //vezuje ga za link za AppRouter // zbog === mora da se stavi parseInt i nije radilo zato sto toga nije bilo
        });

        return (
            <div>
                <div className="productData">
                    <div className="productBasic">
                        <Link to="/shop" className="goBackBtn">
                            <Arrow style={arrowStyle}> </Arrow>
                            <p className="goBack">Go Back</p>
                        </Link>
                        <div className="description">
                            {/*{this.props.productId}*/}
                            <h1>{product.title}</h1>
                            <h4>{product.type}</h4>
                            <h3>{product.price}</h3>
                            <p>
                                A 100% second hand fabrics assembled with tender care and love. <br/> Each combination of
                                materials is unique whether in colors, patterns or texture of the fabric.
                            </p>
                            <button className="globalButton">
                                <Link to="/order">
                                    <h3>Make Me Yours</h3>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="productImage">
                        <img src={product.image} alt=""/>
                    </div>
                </div>

                <div className="productDescription">
                    <div className="productMaterials">
                        <div className="detailImage">
                            <img src={product.detailImg} alt=""/>
                        </div>
                        <h2>Materials</h2>
                        <h3>Materials that have been used for making the backpack are cotton, twill and eco leather. Logo Is embroidered on the front. Handles are made of cotton rope. Backpack are soft and pleasant to the touch.
                            Inner lining is made of black cotton and can be inverted for the purpose of cleaning.</h3>
                    </div>
                    <div className="productInstructions">
                        <div className="detailImage">
                            <img src={product.detailImgTwo} alt=""/>
                        </div>
                        <h2>Care Instructions</h2>
                        <h3>Hand wash and do not bleach. Do not tumble dry or dry clean. Note: Bagsuz Handcrafted Goods is not responsible for the possible damage caused by washing.</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;