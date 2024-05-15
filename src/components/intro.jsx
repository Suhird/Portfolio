import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import GLOBE from 'vanta/dist/vanta.globe.min'

class Intro extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      // <div id="home" className="intro route bg-image background">
      //   <div id="stars" />
      //   <div id="stars2" />
      //   <div id="stars3" />
       <div id="home" className="intro route bg-image background" ref={this.vantaRef}>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container" id="typedText">
              <h1 className="intro-title mb-4">Hello, I am Suhird Singh</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Full Stack Engineer",
                      "Python/Golang Developer",
                      "AI/ML Engineer",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Intro;
