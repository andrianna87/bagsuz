import React from 'react';
import '../styles/About.css';
import {Link} from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const btnStyle = {
    marginTop: "50px"
};

const About = () => {
    return (
        <div>
            <div className="aboutIntroContainer">
                <div className="aboutIntroWrapper">
                    <div className="aboutIntroText">
                        <h1>
                            We Are About
                        </h1>
                        <h5>expressing individuality</h5>
                        <h1>
                            By Improving Our Community.
                        </h1>
                        <AnchorLink href='#more'>
                            <button className="globalButton" style={btnStyle}>
                                <h4>
                                    Learn How
                                </h4>
                            </button>
                        </AnchorLink>
                    </div>
                </div>
                <div className="aboutImage">
                    <div className="circle"> </div>
                </div>
            </div>
            <div className="aboutContent">
                <div className="aboutText">
                    <h3>
                        The studio is specialized in working under unusual production circumstances and specific forms of communication.
                        Permanently dedicated creative professionals within their ranks, as well as a wide network of collaborators throughout the region.
                    </h3>
                    <br/>
                    <h3>
                        The studio is specialized in working under unusual production circumstances and specific forms of communication.
                        Permanently dedicated creative professionals within their ranks, as well as a wide network of collaborators throughout the region.
                    </h3>
                </div>
                <div className="aboutTextImage"> </div>
                <div className="aboutTextTitle">
                    <h1>And that's how the Bagsuz was born.</h1>
                    <Link to="/shop">
                        <p className="productsTag">see our products</p>
                    </Link>
                </div>
            </div>
            <div className="aboutMaterials">
                <div className="materialsDescription">
                    <h1 id="description">Materials</h1>
                    <h3>
                        In Japanese uruoi means moisture, blessing and fulfillment. Inspired by this belief, uruoi was created in 1989 with a focus on Japan’s hydration driven beauty rituals.
                        uruoi concentrates on the core elements of skincare to combine an authentically Japanese minimalist philosophy and powerful ingredients backed by science.
                    </h3>
                </div>
                <div className="materialsImages">
                    <div className="materialsImageOne"> </div>
                    <div className="materialsImageTwo"> </div>
                </div>
                <div className="materialsDescription">
                    <section id='more'>
                        <h2>
                            The Second Life of Materials
                        </h2>
                    </section>
                    <h3>
                        In Japanese uruoi means moisture, blessing and fulfillment. Inspired by this belief, uruoi was created in 1989 with a focus on Japan’s hydration driven beauty rituals.
                        uruoi concentrates on the core elements of skincare to combine an authentically Japanese minimalist philosophy and powerful ingredients backed by science.
                    </h3>
                    <br/>
                    <h2>
                        Sugar Spice & Everything Nice
                    </h2>
                    <h3>
                        uruoi has formulated a minimalistic line of skin care with our proprietary DENKA PURE HYALURONIC ACID, D.P.H.A.™ to help skin retain moisture, making skincare
                        accessible for everyone and creating a basic routine that listens to what our skin really needs.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default About;