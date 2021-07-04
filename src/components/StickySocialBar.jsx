import React from 'react';
import './StickySocialBar.scss';
import linkedin from '../static/linkedin.png';
import github from '../static/github.png';
import email from '../static/email.png';

const StickySocialBar = () => {
    return (
        <div className="sticky-social-bar">
            <a href="https://www.linkedin.com/in/omkaark/" rel="noreferrer" target="_blank"><img className="social-icon" src={linkedin} alt="linkedin icon" /></a>
            <a href="https://github.com/omkaark" rel="noreferrer" target="_blank"><img className="social-icon" src={github} alt="Github icon" /></a>
            <a href="mailto:okamath@uwaterloo.com" rel="noreferrer" target="_blank"><img className="social-icon" src={email} alt="Email icon" /></a>
        </div>
    );
} 
export default StickySocialBar;