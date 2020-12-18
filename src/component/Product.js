import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";

class Product extends Component {



    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Product</h1>
                                </div>
                            </div>
                            <div className="row">
                                <ProductConsumer>
                                    {(res) => {
                                        return res.products.map((e, i) => {
                                            return <div className="col-md-6 col-lg-3" key={i}>
                                                <div className="card">
                                                    <div className="img-container"
                                                         onClick={()=>{console.log('you clicked me')}}>
                                                        <Link to='/'>
                                                            <img src={e.image} alt='' className="img-fluid card-img-top"/>
                                                        </Link>
                                                    </div>
                                                    <div className="card-body text-center">
                                                        {e.title}
                                                        <button className="addToCart" onClick={()=>{}}>Add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="main-footer">
                    <strong>Copyright &copy; 2020 <Link to="#">Research Portal</Link>.</strong>
                    All rights reserved.
                </footer>
            </div>
        );
    }
}

export default Product;