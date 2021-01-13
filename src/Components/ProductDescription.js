import React from 'react';
import '../styles/global.css';
import data from "../data/products";

class ProductDescription extends React.Component {
    constructor(props) {
        super(props);
        const productItem = data;
        //console.log(this.props);
        this.state = productItem;
    }

    render() {

        return (
            <div className="productDescription">
                <div className="productMaterials">
                    <p>Inner lining with a pocket</p>
                    <h2>Materials</h2>
                    <p>Materials that have been used for making the backpack are cotton, twill and eco leather. Logo Is embroidered on the front. Handles are made of cotton rope. Backpack are soft and pleasant to the touch.
                        Inner lining is made of black cotton and can be inverted for the purpose of cleaning.</p>
                </div>
                <div className="productInstructions">
                    <div className="detailsImage">
                        <p>Material Details</p>
                    </div>
                    <h2>Care Instructions</h2>
                    <p>Hand wash and do not bleach. Do not tumble dry or dry clean. Note: Bagsuz Handcrafted Goods is not responsible for the possible damage caused by washing.</p>
                </div>
            </div>
        )
    }
}

export default ProductDescription;