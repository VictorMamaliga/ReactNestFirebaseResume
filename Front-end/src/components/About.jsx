
const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <p>
                I am a Full-Stack Developer with proficiency in languages like JavaScript, Python, etc.
                I love building new, challenging projects and have a knack for problem-solving.
            </p>
            <div className="skills-container">
                <h2>Skills</h2>
                <div className="skill">
                    <p>JavaScript</p>
                    <div className="skill-level">
                        <div className="progress" style={{ width: "90%" }}></div>
                    </div>
                </div>
                <div className="skill">
                    <p>Python</p>
                    <div className="skill-level">
                        <div className="progress" style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className="skill">
                    <p>React</p>
                    <div className="skill-level">
                        <div className="progress" style={{ width: "75%" }}></div>
                    </div>
                </div>
                
            </div>
        </div>


    );
};

export default About;
