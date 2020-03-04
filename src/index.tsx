import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import DetailProduct from './components/Principal/ListProducts/Products/Details/DetailProduct';
import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/detalhes/produto:id" exact={true} component={DetailProduct} />
        </Switch>
    </ BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();
