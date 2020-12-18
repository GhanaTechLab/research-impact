import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {

    render() {
        return (
            <aside className="main-sidebar sidebar-light-primary elevation-4">
                <Link to="/" className="brand-link">
                    <img src="dist/img/gtl.png" alt="GTL Logo"
                         className="brand-image img-circle elevation-3"
                         style={{opacity: ".8"}}/>
                    {/*<span className="brand-text font-weight-light">GTL</span>*/}
                </Link>

                <div className="sidebar">
                    {/*<div className="user-panel mt-3 pb-3 mb-3 d-flex">*/}
                    {/*<div className="image">*/}
                    {/*<img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>*/}
                    {/*</div>*/}
                    {/*<div className="info">*/}
                    {/*<Link to="#" className="d-block">Alexander Pierce</Link>*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                            data-accordion="false">
                            <li className="nav-item" >
                                <Link to="/" className="nav-link" id="ecosystem">
                                    <p>
                                        Ecosystem
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/base-program" className="nav-link" id="base">
                                    <p>
                                        Base Program
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/institutional-strengthening" className="nav-link" id="institution" >
                                    <p>
                                        Institutional strengthening
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

        );
    }
}

export default Sidebar;