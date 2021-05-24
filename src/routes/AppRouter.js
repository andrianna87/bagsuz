import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Homepage} from '../Components/Homepage'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import About from '../Components/About'
import PressPage from '../Components/PressPage'
import PrevCollections from '../Components/PrevCollections'
import ProductList from '../Components/ProductList'
import ProductDetails from '../Components/ProductDetails'
import NotFound from '../Components/NotFound'
import TermsConditions from '../Components/TermsConditions'
import OrderForm from "../Components/OrderForm";

const AppRouter = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Homepage} exact={true}/>
                    <Route path="/shop" component={ProductList}/>
                    <Route path="/product/:productId" component={ProductDetails}/>
                    <Route path="/order" component={OrderForm}/>
                    <Route path="/about" component={About}/>
                    <Route path="/press" component={PressPage}/>
                    <Route path="/prev-collections" component={PrevCollections}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/terms-of-use" component={TermsConditions}/>
                    <Route component={NotFound}/>
                </Switch>
            <Footer />
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;