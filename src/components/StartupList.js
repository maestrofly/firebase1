import React from 'react';


const StartupList = () => {
    return(
        <div className="background">
            <div className="details">
                <h4>All startups</h4>
            </div>
            <div className="filter">
                <small>Filter Startups</small>
            </div>
            <div className="list bg">
                <span className="company">Company</span>
                <span>Market/Industry</span>
                <span>Location</span>
                <span>Joined</span>
                <span>Approved</span>
                <span>Action</span>
            </div>
            <div className="info">
                <span className="company"><small>Company Name</small></span>
                <span><small>Real Estate</small></span>
                <span><small>Lagos</small></span>
                <span><small>Dec 12, 2019</small></span>
                <span className="green"></span>
                <span className="blue"></span>
            </div>
        
        
        
        
        
        
        
        </div>

    );
};

export default StartupList;