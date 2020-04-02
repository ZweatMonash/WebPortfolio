import React, { Component } from "react";
import Tag from "./Tag";
import { plusSlides, currentSlide } from "../resources/img/slider_script";
/*Added by SS*/
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  ["images/rover_1.jpg", "images/rover_2.jpg", "images/rover_3.jpg"],
  [
    "images/modubrace.jpg",
  ],
  [
    "images/bit-by-bit.jpg",
  ],
  [
    "images/anti-sleep_system.jpg",
  ]
];

export class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      projectIndex: null
    };
  }

  openLightBox = id => {
    this.setState({
      isOpen: true,
      projectIndex: id
    });
  };

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="portfolio d-flex flex-column content">
        <div className="portfolio-content">
          <h3 className="my-4">What I Do</h3>
          <p>
            I do a lot of things to keep my mind occupied all the time. My
            current interest lies in the area of robotics and machine learning.
            The latest project that I am most proud of and spend most of my time
            on is to build the next generation Mars Rover with the Monash Nova
            Rover Team. As a software engineer of the team, I design, develop,
            test and evaluate the program running on the rover. I also develop a
            pathfinding and execution program for the autonomous system of the
            rover. It has been highly rewarding being part of this student team
            that is constantly engineering and innovating ways to contribute to
            the future of space exploration.
          </p>
        </div>

        <div className="portfolio-content right-align">
          <h3 className="my-4">Monash Nova Rover</h3>
          <div className="tag-container">
            <Tag name="Software" />
            <Tag name="Design" />
            <Tag name="Autonomous" />
          </div>

          <img
            src="images/rover_1.jpg"
            alt=""
            className="project-img"
            onClick={() => this.openLightBox(0)}
          />

          <div className="img-description">The Monash Nova Rover</div>
                <p align="justify">
            Monash Nova Rover are a team of university students designing,
            fabricating, and testing the next generation of Mars rovers right
            here in Melbourne - and inspiring future generations along the way.
          </p>
        </div>

        <div className="projects">
          <div className="portfolio-content">
            <h3 className="my-4">Anti-Sleep System</h3>
            <div className="img-container">
              <img
                src="images/modubrace.jpg"
                alt=""
                className="project-img"
                onClick={() => this.openLightBox(1)}
              />
              <div className="img-description">Some Project</div>
            </div>
            <div className="tag-container">
              <Tag name="Engineering" />
              <Tag name="Design" />
              <Tag name="Mechanical" />
            </div>
            <p>HardHack 2019 @ Monash University</p>
            <p>
              Developed an Anti-Sleep System for drowsy drivers. The system
              incorporates three tracking parameters. These are the number of
              times the driver blinks, the presence of hands on the steering
              wheel and the heart rate. When all three checks are met, the car
              will slow and will alert the company that the driver is no longer
              fit for the journey. This system can be integrated into autonomous
              cars to reduce fatalities due to road accidents. The prototyping
              was achieved using a raspberry pi which tracks the eye blinks and
              communicates serially to the Arduino which keeps track of heart
              rate and hand presence. The raspberry pi will notify and alert the
              company via SMS/call.
            </p>
          </div>

          <div className="portfolio-content">
            <h3 className="my-4">Bite-by-Byte</h3>
            <div className="img-container">
              <img
                src="images/bit-by-bit.jpg"
                alt=""
                className="project-img"
                onClick={() => this.openLightBox(2)}
              />
              <div className="img-description">Some Project</div>
            </div>
            <div className="tag-container">
              <Tag name="Software" />
              <Tag name="Mobile App" />
              <Tag name="Augmented Reality" />
            </div>
            <p>Bit-by-Bit hackathon 2019 @ Monash university</p>
            <p>
              So what is Bite-by-Byte? It is a service which takes advantage of
              the depth sensing camera of the iPhone to 3D scan a food item and
              uploads it to cloud. Business owners can upload realistic 3D
              models of their food in the exact size, shape and color into the
              app. Then, on the user side, they can download the food and load
              it into an AR environment to visualize it and decide whether they
              would want to buy the food, or compare the model with the real
              thing.
            </p>
          </div>

          <div className="portfolio-content">
            <h3 className="my-4">Modubrace for Scoliosis Patient</h3>
            <div className="img-container">
              <img
                src="images/anti-sleep_system.jpg"
                alt=""
                className="project-img"
                onClick={() => this.openLightBox(3)}
              />
              <div className="img-description">Some Project</div>
            </div>
            <div className="tag-container">
              <Tag name="Engineering" />
              <Tag name="Design" />
              <Tag name="Mechanical" />
            </div>
            <p>Hippocratic hackathon 2019 @ the University of Melbourne</p>
            <p>
              Designed a brace for patients with scoliosis, which is a condition
              in which the spine curves due to hereditary factors, spinal
              infection or neuromuscular disorder. This was developed during a
              48-hour hackathon held by Melbourne University Biomedical
              Engineering Society. This design fetched the first place due to
              meeting factors such as sustainability, cost-effectiveness and
              solves the issue that braces in the current market failed to
              address which is muscle atrophy - the deterioration of muscle due
              to being over-reliant on the brace. The solution was to integrate
              Electrical Muscle Simulation (EMS) which evokes the contraction of
              muscle using electrical impulses.
            </p>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[this.state.projectIndex][photoIndex]}
            nextSrc={
              images[this.state.projectIndex][
                (photoIndex + 1) % images[this.state.projectIndex].length
              ]
            }
            prevSrc={
              images[this.state.projectIndex][
                (photoIndex + images[this.state.projectIndex].length - 1) %
                  images[this.state.projectIndex].length
              ]
            }
            onCloseRequest={() =>
              this.setState({ isOpen: false, photoIndex: 0 })
            }
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + images[this.state.projectIndex].length - 1) %
                  images[this.state.projectIndex].length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + 1) % images[this.state.projectIndex].length
              })
            }
          />
        )}
      </div>
    );
  }
}
export default Portfolio;
