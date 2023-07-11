import image1 from "../assets/img/image1.png";
import image2 from "../assets/img/image2.png";
import image3 from "../assets/img/image3.png";
import image4 from "../assets/img/image4.png";
import image5 from "../assets/img/image5.png";
import image6 from "../assets/img/image6.png";
import image7 from "../assets/img/image7.png";
import image8 from "../assets/img/image8.png";
import image9 from "../assets/img/image9.png";
import image10 from "../assets/img/image10.png";
import image11 from "../assets/img/image11.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I possess proficient programming skills in various languages and frameworks, <br></br> enabling me to develop efficient and innovative solutions for complex problems.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={image1} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={image2} alt="Image" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={image3} alt="Image" />
                  <h5>java</h5>
                </div>
                <div className="item">
                  <img src={image4} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={image5} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={image6} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={image7} alt="Image" />
                  <h5>java Script</h5>
                </div>
                <div className="item">
                  <img src={image8} alt="Image" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <img src={image9} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={image10} alt="Image" />
                  <h5>NOde js</h5>
                </div>
                <div className="item">
                  <img src={image11} alt="Image" />
                  <h5>Deep learning</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
