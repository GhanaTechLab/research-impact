import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import $ from 'jquery';

class Home extends Component {
    componentDidMount() {
        document.title = 'Institutional strengthening';
        $('.nav-link').removeClass('active')
        $('#institution').addClass('active')
    }

    render() {
        return (
            <div>
                <TopNavbar/>
                <Sidebar/>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="custom-container-fluid">
                            <div className="row mb-5 mt-5">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-orange">Institutional Strengthening</h1>
                                </div>
                                {/*<div className="col-sm-6">*/}
                                {/*<ol className="breadcrumb float-sm-right">*/}
                                {/*<li className="breadcrumb-item"><Link to="/">Home</Link></li>*/}
                                {/*<li className="breadcrumb-item active">Dashboard v1</li>*/}
                                {/*</ol>*/}
                                {/*</div>*/}
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">
                                            <img src="dist/img/institution/1.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">Hub Capacity Building</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">
                                            <img src="dist/img/institution/2.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">Hub Infrastructure</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">
                                            <img src="dist/img/institution/3.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">Expenditure Reporting</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">
                                            <img src="dist/img/institution/4.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">Funds Request</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">
                                            <img src="dist/img/institution/5.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">Implementation Plan</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;