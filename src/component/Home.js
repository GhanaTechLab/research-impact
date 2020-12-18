import React, {Component} from 'react';
import $ from "jquery";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";

// import {Link} from 'react-router-dom';

class Home extends Component {

    componentDidMount() {
        document.title = 'Ecosystem';
        $('.nav-link').removeClass('active')
        $('#ecosystem').addClass('active')
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
                                    <h1 className="m-0 text-orange">Ecosystem</h1>
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
                                            <img src="dist/img/ecosystem/1.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">Ecosystem Mapping</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">

                                            <img src="dist/img/ecosystem/2.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">GLIT</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">

                                            <img src="dist/img/ecosystem/3.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">Stakeholder
                                                Meeting
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">
                                            <img src="dist/img/ecosystem/4.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">Investor
                                                Network
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">
                                            <img src="dist/img/ecosystem/5.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">Startup BAS</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">
                                            <img src="dist/img/ecosystem/6.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">LSIPS</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">
                                            <img src="dist/img/ecosystem/7.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">NSIPS</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-md-5">
                                    <div className="card homeCardStyle mb-md-7">
                                        <div className="tainer">
                                            <img src="dist/img/ecosystem/7.png" style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px'
                                            }} className="card-img-top" alt=""/>
                                        </div>
                                        <div className="card-body bg-green text-center"
                                             style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                                            <div className="font-weight-bold">Institutional
                                                Strengthening
                                            </div>
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