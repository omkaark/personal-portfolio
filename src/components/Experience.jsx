import PropTypes from "prop-types";

import "./Experience.scss";

import "../util/colourUtil";

import Tag from "./Tag.jsx";
import Button from "./Button.jsx";

import positionIcon from "../static/job-icon.svg";
import companyIcon from "../static/company-icon.svg";
import locationIcon from "../static/location-icon.svg";
import { getColour } from "../util/colourUtil";

const CodeLangCollection = ({ langs }) => {
  console.log(langs);
  return langs.map((lang) => {
    return (
      <Button
        key={lang}
        settings={{ text: lang, onClick: () => {} }}
        styles={{
          color: getColour("white"),
          backgroundColor: getColour("button"),
        }}
      ></Button>
    );
  });
};

const Experience = ({
  position,
  company,
  location,
  period,
  langTags,
  children,
}) => {
  return (
    <div className="experience-grid">
      <div className="general-information">
        <div className="first-tile">
          <p className="position">
            <img alt="" src={positionIcon} className="position-icon" />
            <strong>{position}</strong>
          </p>
          <p className="work-period">
            <Tag textColor="white" height="40px" tagColor="background">
              {period}
            </Tag>
          </p>
        </div>
        <p className="company">
          <img alt="" src={companyIcon} className="company-icon" />
          {company}
        </p>
        <p className="location">
          <img alt="" src={locationIcon} className="location-icon" />
          {location}
        </p>
      </div>
      <div className="info-tags">
        <CodeLangCollection langs={langTags}></CodeLangCollection>
      </div>
      <div className="information-grid">
        <div className="what-i-did">
          <strong className="title">What I did</strong>
          <br />
          {children[0]}
        </div>
        <div className="about-company">
          <strong className="title">About {company}</strong>
          <br />
          {children[1]}
        </div>
        <div className="what-i-learned">
          <strong className="title">What I learned</strong>
          <br />
          {children[2]}
        </div>
      </div>
      <div className="length-indicator">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Experience;

Experience.propTypes = {
  position: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  period: PropTypes.string,
  langTags: PropTypes.array,
  children: PropTypes.element,
};

Experience.defaultProps = {
  langTags: [],
};
