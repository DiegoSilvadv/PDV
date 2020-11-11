import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Budget from './pages/budget';
import Customer from './pages/customer';
import Product from './pages/product';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact />
                <Route path="/product" component={ Product } />
                <Route path="/customer" component={ Customer } />
                <Route path="/budget" component={ Budget } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;