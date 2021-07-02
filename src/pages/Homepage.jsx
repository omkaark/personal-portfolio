import React from 'react';

import "./Homepage.scss";

import { getColour } from "../util/colourUtil";

import Wrapper from "../components/Wrapper";
import Heading from "../components/Heading";
import Text from "../components/Text";
import Tag from "../components/Tag";
import Announcement from "../components/Announcement";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Footer from "../components/Footer";

import placeholder from "../static/blog-placeholder.png";

const BlogPreview = ({settings}) => {
    return (
        <div className="blog-previews">
            {settings.map((setting, index) => {
                return (
                    <div key={index} className="blog-preview">
                        <div className="preview-img-background"><img className="blog-preview-img" src={placeholder} alt={setting.title}/></div>
                        <p className="blog-preview-title">{setting.title}</p>
                        <p className="blog-preview-desc"><strong>{setting.date}</strong><br/><br/>{setting.desc}</p>
                    </div>
                );
            })}
        </div>
    );
}

const Homepage = () => {
    return (
        <div className="homepage">
            <Wrapper width="80%" className="page-content">
                <Heading text="About me"/>
                <Text styles={{margin: "20px 0px"}}>
                    I wanted to make this website an icon only website, but this was the only section I couldn’t include, so I decided to change the UI. This website is a blog about my journey.
                    <br/>
                    <br/>
                    I am Omkaar, an <Tag borderShape="circular" tagColor="background" textColor="white">Aspiring Product Manager</Tag> and an aspiring good husband and father.
                </Text>
                <Announcement buttonText="View my Product Blog" url="" styles={{marginBottom: "30px", padding: "20px", borderRadius: "20px", color: "white", backgroundColor: getColour("background")}}>
                    Checkout my product analysis posts where I explore famous, not-so-famous and infamous products! I try my best to showcase my skills, and hopefully you learn a thing or two.
                </Announcement>
                <Heading text="Key Acheivements"/>

                <br /><br />
                <Heading text="Work Experience"/>
                <Experience className="work-experience" company="Mink Learning" position="Growth Product Manager" location="Waterloo, CA" period="Jun 2021 - Aug 2021">
                    <ul className="experience-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                    <ul className="experience-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                    <ul className="experience-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                </Experience>
                <Experience className="work-experience" company="Mink Learning" position="Growth Product Manager" location="Waterloo, CA" period="Jun 2021 - Aug 2021">
                    <ul className="experience-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                    <ul className="experience-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                    <ul className="experience-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                </Experience>
                <br/><br/>
                <Heading text="Volunteer Experience"/>
                <Experience className="work-experience" company="Mink Learning" position="Growth Product Manager" location="Waterloo, CA" period="Jun 2021 - Aug 2021">
                    <ul className="experience-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                    <ul className="experience-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                    <ul className="experience-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                </Experience>
                <br/><br/>
                <Heading text="Blog"/>
                <BlogPreview 
                    settings={[
                        {
                            "src": "../static/blog-placeholder.png",
                            "title": "This is a long form blog post about product analysis",
                            "date": "4th Aug 2021",
                            "desc": "This is a long form blog post about product analysis",
                            "href": "This is a long form blog post about product analysis"
                        }, 
                        {
                            "src": "../static/blog-placeholder.png",
                            "title": "This is a long form blog post about product analysis",
                            "date": "4th Aug 2021",
                            "desc": "This is a long form blog post about product analysis",
                            "href": "This is a long form blog post about product analysis"
                        },
                        {
                            "src": "../static/blog-placeholder.png",
                            "title": "This is a long form blog post about product analysis",
                            "date": "4th Aug 2021",
                            "desc": "This is a long form blog post about product analysis",
                            "href": "This is a long form blog post about product analysis"
                        }
                    ]}
                />
                <br /><br />
                <Heading text="Projects"/>
                <Project className="work-experience" CTA="View project live" name="Some Project I Did" period="Jun 2021 - Aug 2021">
                    <ul className="project-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                    <ul className="project-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                    <ul className="project-list">
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                        <li>Company is a private equity education firm. Has a lotta shit in it</li>
                    </ul>
                </Project>
                <br /><br />
            </Wrapper>
            <Footer>
                <React.Fragment>
                    <p className="footer-title">Something</p>
                    <a className="footer-link" href="google.com">Something</a>
                    <a className="footer-link" href="google.com">Something</a>
                    <a className="footer-link" href="google.com">Something</a>
                </React.Fragment>
                <React.Fragment>
                    <p className="footer-title">Something</p>
                    <a className="footer-link" href="google.com">Something</a>
                    <a className="footer-link" href="google.com">Something</a>
                    <a className="footer-link" href="google.com">Something</a>
                </React.Fragment>
                <React.Fragment>
                    <p className="footer-title">Something</p>  
                    <a className="footer-link" href="google.com">Something</a>
                    <a className="footer-link" href="google.com">Something</a>
                    <a className="footer-link" href="google.com">Something</a>
                </React.Fragment>
                <React.Fragment>
                    <p className="footer-title">Something</p>
                    <a className="footer-link" href="google.com">Something</a>
                    <a className="footer-link" href="google.com">Something</a>
                    <a className="footer-link" href="google.com">Something</a>
                </React.Fragment>
            </Footer>
        </div>
    );
}

export default Homepage;