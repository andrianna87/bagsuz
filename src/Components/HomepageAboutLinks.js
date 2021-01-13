import React from 'react';
import '../styles/HomepageAboutLinks.css';
import Link from "react-router-dom/Link";

const HomepageAboutLinks = () => {
    return (
        <div className="linksWrapper">
            <div className="linksColumnOne">
                <div className="linksImgOne">
                    {/* img here */}
                </div>
                <div className="aboutSectionTxt">
                    <h2>
                        More Than Meet The Eye
                    </h2>
                    <h3>
                        We focus on what others don’t - nature's well being & your happiness.
                    </h3>
                    <Link to="/about">
                        <p className="linksTag">read more</p>
                    </Link>
                </div>
            </div>
            <div className="linksColumnTwo">
                <div className="linksImgTwo">
                    {/* img here */}
                </div>
                <div className="aboutSectionTxt">
                    <h2>
                        The Evolution Of Bagsuz
                    </h2>
                    <h3>
                        Curated selection of products from previous collections and editions.
                    </h3>
                    <Link to="/prev-collections">
                        <p className="linksTag">read more</p>
                    </Link>
                </div>
            </div>
            <div className="linksColumnThree">
                <div className="linksImgThree">
                    {/* img here */}
                </div>
                <div className="aboutSectionTxt">
                    <h2>
                        It's Story Time
                    </h2>
                    <h3>
                        If you'd like to learn something more about us, this is the place.
                    </h3>
                    <Link to="/press">
                        <p className="linksTag">read more</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default HomepageAboutLinks;