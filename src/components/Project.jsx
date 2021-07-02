import "./Project.scss";

import "../util/colourUtil";

import Tag from "./Tag.jsx";
import Button from "./Button.jsx";

import projectIcon from "../static/project-icon.svg";
import { getColour } from "../util/colourUtil";

const CodeLangCollection = ({langs}) => {
    return (langs.map(lang => {
            return <Button key={lang} settings={{text: lang, onClick: () => {}}} styles={{color: getColour("white"), backgroundColor: getColour("button")}}>
            </Button>;}
        )
    );
};

const Project = ({name, period, CTA, children}) => {
    return (
        <div className="project-grid">
            <div className="general-information">
                <div className="first-tile">
                    <p className="project-name">
                        <img alt="" src={projectIcon} className="project-icon" />
                        <strong>{name}</strong>
                    </p>
                    <Button settings={{text: CTA, onClick: () => {}}} styles={{height: "40px"}}/>
                </div>
                <p className="work-period">
                    <Tag height="40px" textColor="white" tagColor="background">{period}</Tag>
                </p>
            </div>
            <div className="info-tags">
                <CodeLangCollection langs={["JS", "HTML", "CSS"]}></CodeLangCollection>
            </div>
            <div className="information-grid">
                <div className="what-i-did">
                    <strong className="title">What I did</strong><br/>
                    {children[0]}
                </div>
                <div className="about-name">
                    <strong className="title">About {name}</strong><br/>
                    {children[1]}
                </div>
                <div className="what-i-learned">
                    <strong className="title">What I learned</strong><br/>
                    {children[2]}
                </div>  
            </div>
            <div className="length-indicator">
                <div className="circle"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default Project;