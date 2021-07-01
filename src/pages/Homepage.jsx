import React from 'react';

import "./Homepage.scss";

import Body from "../components/Body";
import Heading from "../components/Heading";
import Text from "../components/Text";
import Tag from "../components/Tag";
import Announcement from "../components/Announcement";
import Experience from "../components/Experience";

const Homepage = () => {
    return (
        <div className="homepage">
            <Body width="80%">
                <Heading text="About me"/>
                <Text styles={{margin: "20px 0px"}}>
                    I wanted to make this website an icon only website, but this was the only section I couldn’t include, so I decided to change the UI. This website is a blog about my journey.
                    <br/>
                    <br/>
                    I am Omkaar, an <Tag borderShape="rounded" tagColor="black" textColor="white">Aspiring Product Manager</Tag> and an aspiring good husband and father.
                </Text>
                <Announcement buttonText="View my Product Blog" url="" styles={{marginBottom: "30px", padding: "20px", borderRadius: "20px", color: "white", backgroundColor: "black"}}>
                    Checkout my product analysis posts where I explore famous, not-so-famous and infamous products! I try my best to showcase my skills, and hopefully you learn a thing or two.
                </Announcement>
                <Heading text="Work Experience"/>
                <Experience className="work-experience" company="Mink Learning">
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
            </Body>
        </div>
    );
}

export default Homepage;