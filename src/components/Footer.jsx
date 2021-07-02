import "./Footer.scss";

import PropTypes from "prop-types";

const Footer = ({children}) => {
    return (
        <div className="footer-cover">
            <div className="footer">
                {children.map((child, index) => {
                    return <div key={index} className="footer-section">{child}</div>
                })}
            </div>
        </div>
    );
} 

export default Footer;

Footer.propTypes = {
    children: PropTypes.array
}

Footer.defaultProps = {
    children: []
}