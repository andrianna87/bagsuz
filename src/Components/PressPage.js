import React from 'react';
import '../styles/PressPage.css';
import '../icons/Arrow';
import Arrow from "../icons/Arrow";
import Link from "react-router-dom/Link";

const PressPage = () => {
    return (
        <div className="pressPage">
            <div className="pressIntro">
                <h2>Bagsuz Press Page</h2>
                <h3>Newest First</h3>
            </div>
            <div className="pressList">
                <a href="https://www.casopiskus.rs/kus-ov-vodic-za-kupovinu-praznicnih-poklona-2/" target="_blank" rel="noopener noreferrer">
                    <div className="press">
                        <div className="pressImg">
                            <div className="articleImgOne">
                                {/*image here*/}
                            </div>
                        </div>
                        <div className="pressText">
                            <div className="pressTextCentering">
                                <p>August 18 / 2018</p>
                                <h2>KUŠ Magazine About Bagsuz backpacks</h2>
                                <h3>In September 2018 KUŠ magazine has approached us, saying that it would like to publish little behind the scenes story about our backpacks.
                                    Unfortunately, it is only available in Serbian language.</h3>
                                <p>Originally published in KUŠ Magazine.</p>
                            </div>
                        </div>
                        <button className="readPress">
                            <div className="circleButton">
                                <Arrow/>
                            </div>
                        </button>
                    </div>
                </a>

                <a href="https://www.casopiskus.rs/bagsuz-rancevi/" target="_blank" rel="noopener noreferrer">
                    <div className="press">
                        <div className="pressImg">
                            <div className="articleImgTwo">
                                {/*image here*/}
                            </div>
                        </div>
                        <div className="pressText">
                            <div className="pressTextCentering">
                                <p>December 25 / 2018</p>
                                <h2>Bagsuz Backpacks As a Gift Recommendation</h2>
                                <h3>Dear KUŠ magazine, it's been an honor to be featured on your list of what to get for your loved ones as a present for a new 2019! This article is also only available in Serbian language.</h3>
                                <p>Originally published in KUŠ Magazine.</p>
                            </div>
                        </div>
                        <button className="readPress">
                            <div className="circleButton">
                                <Arrow/>
                            </div>
                        </button>
                    </div>
                </a>
                <div>
                    <Link to="/#">
                        <p className="loadMoreBtn">Load More</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default PressPage;