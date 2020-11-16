import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from './pages/landing/landing';
import Budget from './pages/budget/budget';
import Customer from './pages/customer/customer';
import Product from './pages/product/product';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact />
                <Route path="/landing" component={Landing} />
                <Route path="/product" component={ Product } />
                <Route path="/customer" component={ Customer } />
                <Route path="/budget" component={ Budget } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;