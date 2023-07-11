import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import chatapp from "../assets/img/chatapp.png";
import decentra from "../assets/img/decentra.png";
import textdetailer from "../assets/img/textdetailer.png";
import attendance from "../assets/img/attendance.png";
import tourism from "../assets/img/tourism.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ghost chat app",
      description: "A fully functionning chat application made using MERN stack",
      imgUrl: chatapp,
      link: "https://ghostchatapp.netlify.app/"
    },
    {
      title: "Decentra",
      description: "This is a platform where students buy courses with ETH and educators manage them easily on one dashboard. This is made using MERN stack and web3.js ",
      imgUrl: decentra,
      link: "https://lnkd.in/gEvBD4zZ"
    },  
    {
      title: "Attendance marking system",
      description: "A fully functioning attendance marking system made using MTCNN and FaceNet",
      imgUrl: attendance,
    },
    {
      title: "Text detailer",
      description: "A text detailing website where you can perform various operations on text",
      imgUrl: textdetailer,
      link: "https://textdetailer.netlify.app/"
    },
    {
      title: "MP tourism website",
      description: "A demo tourism website made using basic html and css",
      imgUrl: tourism,
      link: "https://akshat1308.github.io/mp_tourism/"
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Projects</h1>
                  <p style={{ marginBottom: '30px' }}>Through my dedicated efforts, I have successfully completed a diverse range of projects, showcasing my versatility and adaptability as a developer. From building sleek and user-friendly web applications to implementing robust backend systems, each project demonstrates my commitment to delivering high-quality solutions. With a keen eye for detail and a passion for innovation, I take pride in my ability to create impactful projects that meet and exceed client expectations. Explore my portfolio and witness the culmination of my skills, creativity, and dedication in action.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
