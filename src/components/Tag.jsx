import React from 'react';
import PropTypes from 'prop-types';

import { getColour } from '../util/colourUtil';

const Tag = ({borderShape, tagColor, textColor, height, children}) => {
    const tagLength = children.length + 1 + "ex";
    const displayType = height === "auto" ? "inline-block" : "flex";
    const heightVal = (typeof(height) !== 'undefined' && height != null) ? height : "auto";
    return (
        <div className="tag" style={{display: displayType, justifyContent: "center", alignItems: "center", height: heightVal, textAlign: "center", width: tagLength, borderRadius: borderShape === "rounded" ? "5px" : "50px", backgroundColor: getColour(tagColor), color: getColour(textColor)}}>{children}</div>
    );
}

export default Tag;

Tag.propTypes = {
    borderShape: PropTypes.string, // rounded or circular
    tagColor: PropTypes.string,
    height: PropTypes.string,
    textColor: PropTypes.string
};
  
Tag.defaultProps = {
    borderShape: "rounded",
    tagColor: "#000",
    textColor: "#fff",
    height: "auto"
};