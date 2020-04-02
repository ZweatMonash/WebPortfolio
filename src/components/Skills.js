import React, { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <div className="skills-content">
        <div className="content-section">
          <h3>Technical Skills</h3>
          <div className="d-flex justify-content-around">
            <span>
              <img src="images/matlab.png" alt="" />
              MATLAB
            </span>
            <span>
              <img src="images/arduino.png" alt="" />
              Arduino
            </span>
            <span>
              <img src="images/Cypress.jpg" alt="" />
              PSOC
            </span>
            <span>
              <img src="images/ROS.jpg" alt="" />
              Robot Operating System (ROS)
            </span>
          </div>
        </div>
        <div className="content-section">
          <h3>Programming</h3>
          <div className="d-flex justify-content-around">
            <span>
              <img src="images/c.png" alt="" />C
            </span>
            <span>
              <img src="images/html_js_css.jpg" alt="" />
              CSS, HTML, JS
            </span>
            <span>
              <img src="images/python.png" alt="" />
              Python
            </span>
          </div>
        </div>
        <div className="content-section">
          <h3>Other Technologies</h3>
          <div className="d-flex justify-content-around">
            <span>
              <img src="images/LTspice.png" alt="" />
              LTSPICE CIRCUIT DESIGN
            </span>
            <span>
              <img src="images/solidworks.png" alt="" />
              SOLIDWORKS
            </span>
            <span>
              <img src="images/gazebo.png" alt="" />
              GAZEBO
            </span>
            <span>
              <img src="images/Excel.png" alt="" />
              Microsoft Excel
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
