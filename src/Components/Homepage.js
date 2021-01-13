import React from 'react';
import '../styles/global.css';
import {HomepageAbout} from "./HomepageAbout";
import HomepageProducts from './HomepageProducts'
import HomepageIntro from "./HomepageIntro";
import HomepageAboutLinks from "./HomepageAboutLinks";

const Homepage = () => {
    return (
        <div>
            <HomepageIntro/>
            <HomepageProducts />
            <HomepageAbout />
            <HomepageAboutLinks />
        </div>
    );
};

export { Homepage }

