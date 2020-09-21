import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";
import stock6 from "../img/image7.jpg"
import ships from "../img/ships.jpg";
import rsna from "../img/rsna.png";
import huffman from "../img/HuffmanCoding.png"
import getXpert from "../img/getXpert.jpeg"
import dota2accept from "../img/dota2accept.png"

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Some of my projects on Github (completed and in-progress)
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="http://github.com/Suhird/AirbusShipDetection" target="_blank">
                  <div className="work-img">
                    <img src={ships} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Airbus Ship Detection Neural Network <span className="text-success">(completed)</span></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python3 NeuralNetworks AI
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
            
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/Suhird/RSNAPneumoniaDetection" target="_blank">
                  <div className="work-img">
                    <img src={rsna} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">RSNA Pneumonia Detection <span className="text-success">(completed)</span></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python3 CNN ImageSegemtation X-RAY
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/Suhird/HuffmanEncoding"  target="_blank">
                  <div className="work-img">
                    <img src={huffman} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Huffman Encoding <span className="text-success">(completed)</span></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python3 Algorithms Heapqueue
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/Suhird/SoftwareEngineeringProject" target="_blank">
                  <div className="work-img">
                    <img src={getXpert} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">getXpert-A social network for skills <span className="text-success">(completed)</span></h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bootstrap Django Python3
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/Suhird/Dota2GameAutoAccept" target="_blank">
                  <div className="work-img">
                    <img src={dota2accept} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Dota 2 Game Acceptor- Desktop automation <span className="text-success">(completed)</span></h2>
                        <div className="w-more">
                          <span className="w-ctegory">OpenCV Image Processing Python2</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/Suhird/DataStructuresInPython" target="_blank">
                  <div className="work-img">
                    <img src={stock6} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Algorithm In Python <span className="text-warning">(in-progress)</span> </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                           Python3 Algorithms
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
             
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
