import React from 'react';
import '../styles/global.css';
import '../styles/ProductList.css';
import '../styles/PrevCollections.css';
import PrevCollectionProduct from "./PrevCollectionProduct";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const PrevCollections = () => {
    return(
        <div>
            <div className="prevCollectionIntro">
                <h1>
                    <AnchorLink href='#goto'>
                        Our Previous Collections & Products
                    </AnchorLink>
                </h1>
                <div className="collectionTxt">
                    <p className="collectionTag">INTRODUCING</p>
                    <h3>
                        These are the backpacks and our other products that have been previously made.
                        Here you can see some of the backpacks that were made in our early days, and some that have recently found home.
                    </h3>
                    <p><span>Note: We will not make any of these backpacks due to our philosophy so please, we kindly ask you not to request that from us. Thank you.</span></p>
                </div>
                <div className="collectionImg">
                    {/*image here*/}
                </div>
            </div>
            <div className="container">
                <div className="collectionSubtitle">
                    <section id='goto'>
                        <h3 className="collectionTag"><sup>2017</sup> / <sub>2019</sub></h3>
                    </section>
                </div>
                <PrevCollectionProduct />
            </div>
        </div>
    );
};

export default PrevCollections;