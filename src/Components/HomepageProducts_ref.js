import React from 'react';
import { Link } from 'react-router-dom';
import tayabak from '../images/tayabak__5.jpg';
import '../styles/global.css';
import '../styles/HomepageProducts.css';

const backgroundStyle = {
    paddingTop: "5%",
    paddingBottom: "5%",
    position: "relative",
    display: 'flex',
    backgroundColor: "#34495E"
    //justifyContent: 'center',
    //alignItems: 'center'
    //alignContent: 'center'
};

const imageStyle = {
    width: "60%",
    height: "600px",
    backgroundImage: `url(${tayabak})`,
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    marginLeft: "30%"
    //backgroundPosition: "right"
};


class HomepageProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: 'https://bagsuz.com/photos/1/85_duvalo/duvalo_4.jpg'
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        // this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseEnter (neznamJosKojaSlika) {
        this.setState({imgSrc: neznamJosKojaSlika})
    }


    render () {
        return (
            <div style={backgroundStyle}>
                <div className="productList">
                    <Link to={'/shop'} onMouseEnter={() => this.handleMouseEnter('https://bagsuz.com/photos/1/85_duvalo/duvalo_4.jpg')}>
                        <h5>
                            <span className="productSpan">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.814 36.69L15.638 23.154L4.886 31.602L0.278 23.442L12.854 18.45L0.374001 13.65L4.694 5.87399L15.734 14.226L13.814 0.497993H22.742L20.822 14.226L31.766 5.87399L35.99 13.554L23.51 18.546L36.086 23.538L31.574 31.506L20.822 23.154L22.646 36.69H13.814Z" fill="black"/>
                                </svg>
                            </span>
                            Backpacks
                        </h5>
                    </Link>
                    <Link to={'/shop'} onMouseEnter={() => this.handleMouseEnter(tayabak)} >
                        <h5>
                        <span className="productSpan">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.814 36.69L15.638 23.154L4.886 31.602L0.278 23.442L12.854 18.45L0.374001 13.65L4.694 5.87399L15.734 14.226L13.814 0.497993H22.742L20.822 14.226L31.766 5.87399L35.99 13.554L23.51 18.546L36.086 23.538L31.574 31.506L20.822 23.154L22.646 36.69H13.814Z" fill="black"/>
                            </svg>
                        </span>
                            Tote Bags
                        </h5>
                    </Link>
                    <Link to={'/shop'}>
                        <h5>
                        <span className="productSpan">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.814 36.69L15.638 23.154L4.886 31.602L0.278 23.442L12.854 18.45L0.374001 13.65L4.694 5.87399L15.734 14.226L13.814 0.497993H22.742L20.822 14.226L31.766 5.87399L35.99 13.554L23.51 18.546L36.086 23.538L31.574 31.506L20.822 23.154L22.646 36.69H13.814Z" fill="black"/>
                            </svg>
                        </span>
                            Accessories
                        </h5>

                    </Link>
                </div>
                <div style={{...imageStyle, backgroundImage: `url(${this.state.imgSrc})`}}>
                </div>
            </div>
        )
    }
}

export default HomepageProducts;
