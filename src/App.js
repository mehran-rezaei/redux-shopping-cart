import React from 'react';
 import {Route , Redirect , Switch} from "react-router-dom"
 import { Provider } from 'react-redux';
// components
import Store from './components/Store';
import ProductDeatails from "./components/ProductDeatails"
import Navbar from './components/Navbar';
import Cart from './components/Cart';
// redux 
import store from './redux/store';

const App = () => {
    return (
        <div className='bg-gray-50'>
                <Provider store={store}>
              <Navbar />
              <Switch>
                  <Route path="/cart" component={Cart} />
                  <Route path="/products/:id" component={ProductDeatails} /> 
                  <Route path="/products" component={Store} />
                   <Redirect to="/products" /> 
              </Switch>
           </Provider>
        </div>
    );
};
export default App;