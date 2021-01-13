import React from 'react';
import '../styles/OrderForm.css';
import '../styles/global.css'
import Link from "react-router-dom/Link";

const btnStyle = {
    width: '60%',
    outline: 'none',
    fontSize: '16px',
    fontWeight: '300',
    cursor: 'pointer',
    marginBottom: '5%',
};

class OrderForm extends React.Component {
    render() {
        return (
            <div className="orderForm">
                <div className="formIntro">
                    <div className="orderLeft">
                        <div className="orderImg">
                            {/*image here*/}
                        </div>
                    </div>
                    <div className="orderRight">
                        <p className="orderSubtitle">ORDER SUMMARY</p>
                        <h2>Product Title</h2>
                        <h3><span>Price:</span> RSD 2.500 / €25 / $20 <span>+ Shipping Costs</span></h3><br/>
                        <h3><span>Type:</span> Backpack</h3>
                        <p className="disclaimer">
                            To place an order, please fill out the order form bellow. By entering data correct, you help us ensure that the package will arrive at the right place.
                            Have no concerns - all of your personal and classified information provided through this page is safe and secure!
                            For all information about shipping process, payment and how we manage confidential data, click <Link to="terms-of-use" className="underlineLink">here</Link>.
                        </p>
                    </div>
                </div>
                <form>
                    <h3>Order Form</h3>
                    <input type="text" name="fullName" className="fullName" placeholder="Full Name" required/>
                    <input type="address" name="address" className="address" placeholder="Delivery Address" required/>
                    <input type="address" name="address" className="address" placeholder="Postal Code and City" required/>
                    <input type="address" name="address" className="address" placeholder="State / Country" required/>
                    <input type="email" name="email" className="email" placeholder="Email Address" required/>
                    <input type="phone" name="phone" className="phone" placeholder="Phone Number" required/>
                    <div className="ctaS">
                        <button className="globalButton" style={btnStyle}>
                            <h4>Place Order</h4>
                        </button>
                        <div>
                            <Link to="/shop">
                                <p className="cancelBtn">Quit Order</p>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default OrderForm;