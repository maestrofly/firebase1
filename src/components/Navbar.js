import React from 'react'




const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <h1> Dashboard</h1>
                <div className="btn-group dropdown">
                    <button
                        type="button"
                        className="btn dropdown-toggle btn btn-light btn-large"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                            Add Startup
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                            Action
                            </a> 
                            <a className="dropdown-item" href="#">
                                Something else here</a> 
                                <div className="dropdown-divider"></div> 
                                <a className="dropdown-item" href="#">
                                    Separated link</a>     
                            </div>
                </div>
            </nav>
        </div>
        
    );
};

export default Navbar;
