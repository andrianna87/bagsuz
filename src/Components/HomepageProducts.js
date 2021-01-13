import React from 'react';
import { Link } from 'react-router-dom';
import tayabak from '../images/tayabak__5.jpg';
import '../styles/global.css';
import '../styles/HomepageProducts.css';

const backgroundStyle = {
    paddingTop: "10%",
    paddingBottom: "10%",
    position: "relative",
    display: 'flex',
    backgroundColor: /*"#849AA8"*/ "#BDC1B6",
    zIndex: "2"
    //justifyContent: 'center',
    //alignItems: 'center'
    //alignContent: 'center'
};

const imageStyle = {
    width: "65%",
    height: "400px",
    backgroundImage: `url(${tayabak})`,
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    marginLeft: "25%",
    backgroundPosition: "center"
};


class HomepageProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: 'https://bagsuz.com/photos/1/48_mamlakah/mamlakah_detail_1.jpg'
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    handleMouseEnter (neznamJosKojaSlika) {
        this.setState({imgSrc: neznamJosKojaSlika})
    }

    render () {
        return (
            <div style={backgroundStyle}>
                <div className="productList">
                    <Link to={'/shop'} onMouseEnter={() => this.handleMouseEnter('https://bagsuz.com/photos/1/48_mamlakah/mamlakah_detail_1.jpg')}>
                        <h5>
                            {/* <span className="productSpan">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.814 36.69L15.638 23.154L4.886 31.602L0.278 23.442L12.854 18.45L0.374001 13.65L4.694 5.87399L15.734 14.226L13.814 0.497993H22.742L20.822 14.226L31.766 5.87399L35.99 13.554L23.51 18.546L36.086 23.538L31.574 31.506L20.822 23.154L22.646 36.69H13.814Z" fill="black"/>
                                </svg>
                            </span> */}
                            Backpacks <span className="productNum"><sup>18</sup></span>
                        </h5>
                     </Link>
                    <Link to={'/shop'} onMouseEnter={() => this.handleMouseEnter('https://bagsuz.com/photos/1/69_old_sand/old_sand_detail_3.jpg')}>
                        <h5>
                            {/* <span className="productSpan">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.814 36.69L15.638 23.154L4.886 31.602L0.278 23.442L12.854 18.45L0.374001 13.65L4.694 5.87399L15.734 14.226L13.814 0.497993H22.742L20.822 14.226L31.766 5.87399L35.99 13.554L23.51 18.546L36.086 23.538L31.574 31.506L20.822 23.154L22.646 36.69H13.814Z" fill="black"/>
                            </svg>
                        </span> */}
                            Tote Bags <span className="productNum"><sup>11</sup></span>
                        </h5>
                    </Link>
                    <Link to={'/shop'} onMouseEnter={() => this.handleMouseEnter('https://bagsuz.com/photos/1/07_gleam_of_lavander/gleam_of_lavender_detail_3.jpg')}>
                        <h5>
                            {/* <span className="productSpan">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.814 36.69L15.638 23.154L4.886 31.602L0.278 23.442L12.854 18.45L0.374001 13.65L4.694 5.87399L15.734 14.226L13.814 0.497993H22.742L20.822 14.226L31.766 5.87399L35.99 13.554L23.51 18.546L36.086 23.538L31.574 31.506L20.822 23.154L22.646 36.69H13.814Z" fill="black"/>
                            </svg>
                        </span> */}
                            Accessories <span className="productNum"><sup>3</sup></span>
                        </h5>

                    </Link>
                </div>
                <div style={{...imageStyle, backgroundImage: `url(${this.state.imgSrc})`}}>
                    <p className="catTag">CATEGORIES</p>
                    <Link to="/shop">
                        <p className="shopTag">shop the collection</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomepageProducts;