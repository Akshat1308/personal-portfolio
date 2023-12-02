import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import resume from "../assets/img/Akshatresume.pdf";

import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["a Student", "a Programmer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (

    <section className="banner" id="home" style={{ marginTop: '0px' }}>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <h1>{`Hi! I'm Akshat`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Student", "Programmer"]'><span className="wrap">{text}</span></span></h1>
                  <p>Motivated CSE student with strong programming skills in C++, C, Python, and Java. Proficient in frontend technologies such as HTML, CSS, JavaScript, ReactJs, and Bootstrap. Experienced in web development using React.js and Node.js. Knowledgeable in deep learning, specifically CNN. Seeking challenging placements to apply and expand my skills</p>
                  <a href="https://drive.google.com/file/d/1eKsHbuWNaq2mjx5jQ17cV3X9GKaM8KFs/view?usp=sharing"><button type="submit"><span>Download resume</span></button></a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" style={{ width: '350px', height: '350px' }} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <img className="background-image-left" src={colorSharp} alt="Image" />

      </Container>
    </section>
  )
}
