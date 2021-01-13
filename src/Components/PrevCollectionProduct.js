import React from 'react';
import collections from "../data/previousCollection";
import '../styles/global.css';

class PrevCollectionProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = collections;
        console.log(collections);
    }

    render() {

        const pStyle = {
            marginTop: '0',
            marginBottom: '10px',
            color: '#5a5858'
        };

        return this.state.collections.map((collection) =>
        {
            return(
                <div className="productItem" key={collection.id}>
                    <div className="productImg">
                        <div className="stockTag">
                            <h6>Sold Out</h6>
                        </div>
                        <img src={collection.image} alt=""/>
                        </div>
                        <div className="productTxt">
                            <p>{collection.title}</p>
                            <p style={pStyle}>{collection.type}</p>
                        </div>
                </div>
            )
        })
    }
}

export default PrevCollectionProduct;