import "./Experience.scss";

const Experience = ({position, company, location, period, children}) => {
    return (
        <div class="experience-grid">
            <div class="about-company">
                <strong class="title">About {company}</strong><br/>
                {children[0]}
            </div>
            <div class="what-i-did">
                <strong class="title">What I did</strong><br/>{
                children[1]}
            </div>
            <div class="what-i-learned">
                <strong class="title">What I learned</strong><br/>
                {children[2]}
            </div>  
        </div>
    );
}

export default Experience;