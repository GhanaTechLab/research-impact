import React, {Component} from 'react';
import {Link} from "react-router-dom";

// import {ProductConsumer} from "../context";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            login:false,
            store:null
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const data = {}
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-logo">
                    <Link to="/"><b>GTL </b>Ecosystem</Link>
                </div>
                <div style={{width: '360px'}}>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control"
                                           onChange={e => this.email = e.target.value} placeholder="Email"/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control"
                                           onChange={e => this.password = e.target.value} placeholder="Password"/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember"/>
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                    </div>
                                </div>
                            </form>
                            <p className="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;