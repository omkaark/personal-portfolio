import React from "react";
import CountUp from "react-countup";

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

import "../components/CountSection.scss";

import placeholder from "../static/blog-placeholder.png";

const BlogPreview = ({ settings }) => {
  return (
    <div className="blog-previews">
      {settings.map((setting, index) => {
        return (
          <div key={index} className="blog-preview">
            <div className="preview-img-background">
              <img
                className="blog-preview-img"
                src={placeholder}
                alt={setting.title}
              />
            </div>
            <p className="blog-preview-title">{setting.title}</p>
            <p className="blog-preview-desc">
              <strong>{setting.date}</strong>
              <br />
              <br />
              {setting.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const CountSection = ({ values }) => {
  return (
    <div className="count-section">
      {values.map((value, inx) => {
        return (
          <div key={inx} className="counter">
            <CountUp
              className="count"
              suffix={value.suffix ? value.suffix : ""}
              end={value.end}
              duration={value.duration}
            />
            <p>{value.description}</p>
          </div>
        );
      })}
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="homepage">
      <Wrapper
        width={window.innerWidth > 1000 ? "80%" : "90%"}
        className="page-content"
      >
        <Heading text="About me" />
        <Text styles={{ margin: "20px 0px" }}>
          I wanted to make this website an icon only website, but this was the
          only section I couldn’t include, so I decided to change the UI. This
          website is supposed to track my journey.
          <br />
          <br /> My biggest acheivement for me till now is that I figured out my
          passion. My passion is to build products with use cases, regardless of
          whether it is through product management or software engineering.
          <br />
          <br /> Two ideas that I am big on are Mental Health and Non-profit
          work focused on value creation. I have worked at various non-profits
          and at companies that are focused on mental health!
          <br />
          <br /> This site lays out my product and software experience.
          <br />
          <br />I am Omkaar, an{" "}
          <Tag
            borderShape="circular"
            tagColor="background"
            textColor="lightfont"
          >
            Aspiring Product Manager
          </Tag>
        </Text>
        <Announcement
          buttonText="View my Product Blog"
          url=""
          styles={{
            marginBottom: "30px",
            padding: "20px",
            borderRadius: "20px",
            color: "white",
            backgroundColor: getColour("background"),
          }}
        >
          Checkout my product analysis posts where I explore famous,
          not-so-famous and infamous products! I try my best to showcase my
          skills, and hopefully you learn a thing or two. (Currently under
          construction)
        </Announcement>
        <Heading text="Acheivements" />
        <CountSection
          values={[
            {
              description: "Growth to my company's linkedin page",
              end: 40,
              duration: 3,
              suffix: "%",
            },
            {
              description: "User interviews conducted to improve user flow",
              end: 10,
              duration: 3,
              suffix: "+",
            },
            {
              description: "People that I have led in all organizations",
              end: 20,
              duration: 3,
              suffix: "+",
            },
          ]}
        />
        <br />
        <br />
        <Heading text="Work Experience" />
        <Experience
          className="work-experience"
          company={"Mink Learning"}
          position={"Product Marketing Manager Intern"}
          location={"Toronto, CA"}
          period={"May 2021 - Aug 2021"}
        >
          <ul className="experience-list">
            <li>
              Owned the linkedin marketing channel for the brand and acheived
              consistent monthly organic growth of 70%
            </li>
            <li>
              Scoped out marketing strategies and explored various non-social
              channels for growth
            </li>
            <li>
              Build email automations and funnels and grew email list by 56%
            </li>
            <li>
              Tracked and analyzed insights from google analytics to make
              optimizations on our landing pages leading to a 16% drop in bounce
              rate{" "}
            </li>
          </ul>
          <ul className="experience-list">
            <li>
              Private education company that makes private equity concepts
              simple for entrepreneurs and investors
            </li>
            <li>
              Offers courses and other products such as community memberships
            </li>
          </ul>
          <ul className="experience-list">
            <li>
              Data driven decision - Making tough decisions with insights from
              available data
            </li>
            <li>
              Data sourcing - Finding places to get new insights from is fun
            </li>
          </ul>
        </Experience>
        <Experience
          className="work-experience"
          company={"iContribute"}
          position={"Full Stack Web Developer"}
          location={"Toronto, CA"}
          langTags={["ReactJS", "SCSS"]}
          period={"Jun 2021 - Aug 2021"}
        >
          <ul className="experience-list">
            <li>
              Set up CI/CD process using netlify staging environment, speeding
              up review process by 60%
            </li>
            <li>
              Made pages more responsive to accommodate mobile users, boosting
              mobile page visits by 40%
            </li>
            <li>
              Worked on the public facing website that displays brand identity
            </li>
          </ul>
          <ul className="experience-list">
            <li>
              Startup that focuses on bridging the gap between student looking
              for volunteering work and NGOs looking for volunteers
            </li>
          </ul>
          <ul className="experience-list">
            <li>
              Review Process - Setting up an efficient review process to suit
              the needs of a high growth startup
            </li>
            <li>
              Blending marketing and software - Using software for marketing
              purposes
            </li>
            <li>
              Default Props - Useful node library called "prop-types" that makes
              handling erroneous props in react easier by focusing on types
            </li>
          </ul>
        </Experience>
        <Experience
          className="work-experience"
          company={"Wazi"}
          position={"Product Manager"}
          location={"Nairobi, Kenya"}
          period={"Feb 2021 - Sep 2021"}
        >
          <ul className="experience-list">
            <li>
              Conducted 10+ user interviews to understand UX pain points and
              find user flow optimizations
            </li>
            <li>
              Produced a design spec based on interview analysis and took
              ownership of front-end redesign
            </li>
            <li>
              Led team of 5 UI/UX designers to produce high-fidelity mockups in
              accordance to design specification
            </li>
            <li>
              Led team of 6 frontend engineers to implement high-fidelity
              designs into a functional web app
            </li>
          </ul>
          <ul className="experience-list">
            <li>Growing Kenyan mental health startup</li>
            <li>
              Aims to eventually empower all Africans with high quality mental
              health services
            </li>
          </ul>
          <ul className="experience-list">
            <li>
              User Flow Innefficiencies - Turned an initially unoptimized user
              flow into an intuitive interface{" "}
            </li>
          </ul>
        </Experience>
        <br />
        <br />
        <Heading text="Volunteer Experience" />
        <Experience
          className="work-experience"
          company="Edify Talks (501c3)"
          position="Product Lead"
          location="San Francisco, USA"
          period="Jan 2021 - Aug 2021"
        >
          <ul className="experience-list">
            <li>
              Created roadmap with for the next year consisting of internal and
              public facing projects
            </li>
            <li>
              Prioritized list of projects based on developer hours and impact
              to our brand
            </li>
            <li>
              Functioned as the Project Manager and Lead Developer to build a
              public-facing website with ~900 weekly visitors
            </li>
            <li>
              Led team of 6 Software Engineers and designed version-control
              strategy to be inclusive of developers of all skill levels
            </li>
            <li>
              Created dev-ops strategy; Expedited the initial milestone delivery
              and compressed the timeline by 30%
            </li>
            <li>
              Produced starter code template for an optimized merging process,
              reducing merge time by 40% time
            </li>
            <li>
              Collaborated with the design team to produce engaging and
              responsive UI designs
            </li>
          </ul>
          <ul className="experience-list">
            <li>
              Registered 501c3 that focuses on raising awareness of eating
              disorders
            </li>
            <li>
              Hosts events and produces a monthly magazine along with effective
              social media posts
            </li>
          </ul>
          <ul className="experience-list">
            <li>
              Project Management - Assigning tasks based on skill level and
              meeting deadlines
            </li>
            <li>
              Cross Collaboraion - Reaching out to other directors for
              collaborating on designs, marketing material, magazine previews,
              etc
            </li>
          </ul>
        </Experience>
        <br />
        <br />
        <Heading text="Blog" />
        <BlogPreview
          settings={[
            {
              src: "../static/blog-placeholder.png",
              title: "Post under construction",
              date: "10th Aug 2021",
              desc: "This blog post is still under construction",
              href: "Not working yet",
            },
          ]}
        />
        <br />
        <br />
        <Heading text="Projects" />
        <Project
          className="work-experience"
          CTA=""
          name="Backlog Prioritization Decision Support System"
          period="Jun 2021 - Aug 2021"
        >
          <ul className="project-list">
            <li>
              Implemented a Decision Support System (DSS) on MS Excel using VBA
            </li>
            <li>
              Brainstormed creative approaches and features using fishbone
              diagrams to suit our client’s needs better{" "}
            </li>
            <li>
              Produced several reports including functional, design and product
              specification documents to document progress{" "}
            </li>
            <li>
              Conducted pain point research (interview) and brainstormed KPIs
              and metrics to measure solution utility
            </li>
          </ul>
          <ul className="project-list">
            <li>Made for a product owner at CIBC (Canadian Bank)</li>
          </ul>
          <ul className="project-list">
            <li>
              Functional Requirements - Talking to user and identifying key
              points
            </li>
            <li>User Interviews - Understanding user painpoints </li>
            <li>
              Project Documents - Producing project plans to manage project more
              efficiently
            </li>
          </ul>
        </Project>
        <br />
        <br />
        <br />
      </Wrapper>
      <Footer>
        <React.Fragment>
          <p className="footer-title">Under Construction</p>
          <a className="footer-link" href="google.com">
            #1
          </a>
          <a className="footer-link" href="google.com">
            #2
          </a>
          <a className="footer-link" href="google.com">
            #3
          </a>
        </React.Fragment>
        <React.Fragment>
          <p className="footer-title">Under Construction</p>
          <a className="footer-link" href="google.com">
            #1
          </a>
          <a className="footer-link" href="google.com">
            #2
          </a>
          <a className="footer-link" href="google.com">
            #3
          </a>
        </React.Fragment>
        <React.Fragment>
          <p className="footer-title">Under Construction</p>
          <a className="footer-link" href="google.com">
            #1
          </a>
          <a className="footer-link" href="google.com">
            #2
          </a>
          <a className="footer-link" href="google.com">
            #3
          </a>
        </React.Fragment>
        <React.Fragment>
          <p className="footer-title">Under Construction</p>
          <a className="footer-link" href="google.com">
            #1
          </a>
          <a className="footer-link" href="google.com">
            #2
          </a>
          <a className="footer-link" href="google.com">
            #3
          </a>
        </React.Fragment>
      </Footer>
    </div>
  );
};

export default Homepage;

/*currentlySortedEvents = [
    {
      start_time: new Date("5/26/2021"),
      primaryColour: "red", 
      event_url: "https://www.w3schools.com/jsref/jsref_getdate.asp", 
      event_title: "Pitch Competition",
      host: "Digga D",
      event_img: "../../../static/events/sample.png",
      event_description: "Waterloo's first live pitch competition that judges your business and startup knowledge",
    }, 
    {
      start_time: new Date("5/26/2021"),
      primaryColour: "blue", 
      event_url: "https://www.w3schools.com/jsref/jsref_getdate.asp", 
      event_title: "Coffee Chat Live",
      host: "Digga D",
      event_img: "../../../static/events/sample.png",
      event_description: "Talk to some awesome people and have fun! The goal of coffee chats could be to improve communications, meet new people and expand your networks",
    }, 
    {
      start_time: new Date("5/26/2021"),
      primaryColour: "yellow", 
      event_url: "https://www.w3schools.com/jsref/jsref_getdate.asp", 
      event_title: "Toughest entrepreneurship journies",
      host: "Digga D",
      event_img: "../../../static/events/sample.png",
      event_description: "Learn from people who have made it after years of hard work and even, bad experiences. Let them teach you about perseverance",
    }
  ];*/
