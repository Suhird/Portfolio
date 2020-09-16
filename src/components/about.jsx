import React from "react";
import myImage from "../img/download.png";
import currentResume from "../img/CurrentResume.pdf"

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Python_skill",
          content: "Python",
          percentage: "90%",
          value: "90",
          duration: "300ms"
        },
        { id: "Django_skill", content: "Django", percentage: "85%", value: "85" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          percentage: "75%",
          value: "75"
        },
        { id: "HTML5_skill", content: "HTML5", percentage: "80%", value: "80" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "75%",
          value: "75"
        },
        {
          id: "TensorFlow",
          content: "TensorFlow",
          percentage: "75%",
          value: "75"
        },
        {
          id: "NN_skill",
          content: "Machine Learning & Neural Networks",
          percentage: "65%",
          value: "65"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hi, I am Suhird Singh and ain't my web designing skills sick? (kidding)"
        },
        {
          id: "second-p-about",
          content:
            "I am a Master gradute from University of Windsor in Computer Science. I have 3+ years of technical experience in a Tech Company. I have also done an 8 months co-op at RBC, Toronto where I developed 2 enterprise level web applications in Django(python). I have 5+ years of experience coding in Python along with experience in Front-end development using React and Django. Along with all that, I am an AI enthusiast with some projects and experience in Tensorflow and Neural Networks."
        },
        {
          id: "third-p-about",
          content:
            "I believe that my problem solving and algorithms skills are better than my web designing skills. In my free time if I am not online gaming, I love solving questions on LeetCode and Hackerrank. I also love to read about new technologies specially in field of Machine Learning and Neural Networks."
        }
      ],
      profileImage: myImage,
      resume : currentResume
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                             src={this.state.profileImage} alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-animated"
                                role="progressbar"
                                style={{ width: skill.percentage, transitionDuration: skill.duration }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                       <p className='lead'>For my technical expertise, check out my full Resume:</p>
                       <a
                  className="lead btn btn-primary btn js-scroll px-4"
                  href={this.state.resume}
                  role="button" target="_blank"
                >View Resume</a>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
