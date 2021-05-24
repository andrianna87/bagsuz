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
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL}/`} component={Homepage} exact={true}/>
                    <Route path={`${process.env.PUBLIC_URL}/shop`} component={ProductList}/>
                    <Route path={`${process.env.PUBLIC_URL}/product/:productId`} component={ProductDetails}/>
                    <Route path={`${process.env.PUBLIC_URL}/order`} component={OrderForm}/>
                    <Route path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    <Route path={`${process.env.PUBLIC_URL}/press`} component={PressPage}/>
                    <Route path={`${process.env.PUBLIC_URL}/prev-collections`} component={PrevCollections}/>
                    <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route path={`${process.env.PUBLIC_URL}/terms-of-use`} component={TermsConditions}/>
                    <Route component={NotFound}/>
                </Switch>
            <Footer />
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;