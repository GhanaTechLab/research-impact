import './App.css';
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
// import TopNavbar from "./component/TopNavbar";
// import Sidebar from "./component/Sidebar";
import Institutional from "./component/Institutional_strengthening";
import Base from "./component/Base_program";
import Home from "./component/Home";
import Default from "./component/Default";
import Product from "./component/Product";
import ProductListApi from "./component/ProductListApi";
import Login from "./component/login";


class App extends Component {

    render() {
        return (
            <React.Fragment>
                {/*<TopNavbar/>*/}
                {/*<Sidebar/>*/}
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/base-program" component={Base}></Route>
                    <Route path="/institutional-strengthening" component={Institutional}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/product-list" component={ProductListApi}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route component={Default}></Route>
                </Switch>
            </React.Fragment>


        );
    }

}

export default App;
