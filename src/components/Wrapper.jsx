import React from 'react';

import "./Wrapper.scss";

const Wrapper = ({className, width, mobileWidth, tabletWidth, children}) => {
    return (
        <div className={className} style={{"width" : width, "margin": "auto"}}>
            {children}
        </div>
    );
} 
export default Wrapper;