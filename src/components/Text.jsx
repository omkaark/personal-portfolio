import React from 'react';
import PropTypes from 'prop-types';

import './Text.scss';

const Text = ({styles, children}) => {
    return (
        <p class="text" style={styles}>
            {children}
        </p>
    );
}

export default Text;

Text.propTypes = {
    styles: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
    children: PropTypes.element
};
  
Text.defaultProps = {
    styles: {"margin" : "0px"},
};