import React from 'react';
import '../styles/HomepageIntro.css';
import { Link } from 'react-router-dom';

const btnStyle = {
    marginTop: "30px"
};

const HomepageIntro = () => {
    return(
        <div className="introSection">

            <div className="bannerLeft">
                <div className="bannerLeftImg">
                    <p className="newTag">NEW</p>
                    <p className="findTag">
                        <Link to="/shop">find out more</Link>
                    </p>
                    {/*image here*/}
                </div>
            </div>

            <div className="bannerRight">

                <div className="bannerMsg">
                    <h1>It's About The</h1>
                    <h5>movement</h5>
                    <h1>Not The Product</h1>
                    <Link to="/about">
                        <button className="globalBtnWhite" style={btnStyle}>
                            <h4>
                                Curious For More?
                            </h4>
                        </button>
                    </Link>
                </div>
                {/*image here*/}
            </div>
            {/*<div className="introOverlay"> </div>*/}
        </div>
    );
};

export default HomepageIntro;