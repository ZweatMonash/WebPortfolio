import React, { Component } from "react";
import Tag from "./Tag";

export class About extends Component {
  render() {
    return (
      <div>
        {/* <header className="about-img"></header> */}
        <div className="content">
          <div className="about-content">
            <div>
              <h3 className="my-4">About Me</h3>
              <div className="about-text">
                <div className="tag-container">
                  <Tag name="Hackathon-fanatic" />
                  <Tag name="Electronics Enthusiast" />
                  <Tag name="Robotics Mentor" />
                </div>
                A self driven{" "}
                <a href="https://www.monash.edu/" className="text-link">
                  Monash
                </a>{" "}
                engineering undergraduate in his final year, who is passionate
                about Robotics and Machine Learning. Zwe Lin majors in
                electrical and computer systems engineering and is currently
                seeking employment with a company that can realize and make use
                of his skills. Curious and eager in nature, Zwe Lin is always
                actively involved in extracurricular and student teams. Zwe Lin
                has been highly commended by teammates and colleauges for his
                resolute work ethics and dedication to achieve success in the
                work he does.
              </div>
            </div>
            <div>
              <img src="profile_pic.png" className="about-portrait" />
            </div>
          </div>
          <div className="about-secondary">
            <div>
              <h3 className="my-4">Work Experience</h3>
              <ul>
                <li>
                  <h4>September 2019 – Present</h4>
                </li>
                <li>
                  <h5>Software Engineer at Monash Nova Rover</h5>
                </li>
                <li>
                  <a href="https://www.novarover.space/">
                    Visit Monash Nova Rover Page
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <h4>November 2019 – Present</h4>
                </li>
                <li>
                  <h5>Research Assistant at Monash University</h5>
                </li>
              </ul>
              <ul>
                <li>
                  <h4>July 2019 – Present</h4>
                </li>
                <li>
                  <h5>
                    Robotics Facilitator/Mentor at Real Time Learning Australia
                  </h5>
                </li>
                <li>
                  <a href="https://rtlaustralia.com/">
                    Visit Real Time Learning Australia Page
                  </a>
                </li>
              </ul>
            </div>
            <div className="center-align">
              <h3 className="my-4">Education</h3>
              <ul>
                <li>
                  <h4>2016 - Present</h4>
                </li>
                <li>
                  <h5>Monash University, Clayton</h5>
                </li>
                <li>
                  <h6>
                    - Honors Bachelor of Electrical and Computer Systems
                    Engineering
                  </h6>
                </li>
                <li>
                  <h6>- Dean’s Honors List: 84.146 Weighted Average Mark</h6>
                </li>
                <li>
                  <h6>- Higher Achiever Award</h6>
                </li>
                <li>
                  <h6>- Monash Summer Research Scholarship Holder</h6>
                </li>
              </ul>
              <ul>
                <li>
                  <h4>2015 - 2016</h4>
                </li>
                <li>
                  <h5>
                    Monash University Foundation Program, Sunway University
                  </h5>
                </li>
                <li>
                  <h6>- Jeffery Cheah Entrance Scholarship</h6>
                </li>
                <li>
                  <h6>- Graduated with 92.75 Weighted Average Mark</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
