import React from 'react';

import "./Body.scss";

const Body = ({width, children}) => {
    return (
        <div className="page-content" style={{"width" : width, "margin": "auto"}}>
            {children}
        </div>
    );
} 
export default Body;