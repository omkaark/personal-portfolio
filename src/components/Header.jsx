import React from 'react';
import Omkaar from "../static/omkaar.jpg";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <img src={Omkaar} alt="Omkaar Kamath"/>
            <p>OMKAAR KAMATH</p>
        </div>
    );
}

export default Header;