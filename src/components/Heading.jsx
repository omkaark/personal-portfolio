import React from 'react';

import "./Heading.scss";

const Heading = ({text}) => {
    return (
        <div className="heading">
            <h3 className="text">{text}</h3>
            <div className="underline"></div>
        </div>
    );
} 
export default Heading;