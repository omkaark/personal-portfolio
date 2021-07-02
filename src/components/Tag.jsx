import React from 'react';
import PropTypes from 'prop-types';

import { getColour } from '../util/colourUtil';

const Tag = ({borderShape, tagColor, textColor, children}) => {
    const tagLength = children.length + 1 + "ex";
    return (
        <div className="tag" style={{textAlign: "center", display: "inline-block", width: tagLength, borderRadius: borderShape === "rounded" ? "5px" : "50px", backgroundColor: getColour(tagColor), color: getColour(textColor)}}>{children}</div>
    );
}

export default Tag;

Tag.propTypes = {
    borderShape: PropTypes.string, // rounded or circular
    tagColor: PropTypes.string,
    textColor: PropTypes.string
};
  
Tag.defaultProps = {
    borderShape: "rounded",
    tagColor: "#000",
    textColor: "#fff"
};