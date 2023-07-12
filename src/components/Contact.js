import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.gif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [isMessageSent, setMessageSent] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }

    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_uxz0t9b",
        "template_8byyk6d",
        e.target,
        "1eX6a-z7Ag1IVKlTg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setButtonText("Send");

          setFormDetails(formInitialDetails);

          // Hide the message after 3 seconds
          setTimeout(() => {
            setMessageSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setButtonText("Send");
        }
      );
  };

  const isFormValid = () => {
    const { firstName, lastName, email, phone, message } = formDetails;
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === ""
    ) {
      setStatus({
        success: false,
        message: "Please fill in all fields.",
      });
      return false;
    }
    return true;
  };

  useEffect(() => {
    // Clear the message after 3 seconds if it is still visible
    let timeout;
    if (isMessageSent) {
      timeout = setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [isMessageSent]);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                  style={{ height: "500px", width: "500px", maxWidth: "100%", height: "auto" }}
                />
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="user_name"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate("firstName", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="user_last"
                          value={formDetails.lasttName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate("lastName", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="user_email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="user_phone"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate("phone", e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          name="message"
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                        ></textarea>
                        <button type="submit" value="Send">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                  {isMessageSent && <MessageSentPopup>Message Sent!</MessageSentPopup>}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6} className="text-center" style={{ marginLeft: "auto", marginRight: "auto" }}>
              <h3 style={{ marginBottom: "25px", marginTop: "10vh" }}>Connect with me on</h3>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/akshat-surana-491b74217/">
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://github.com/Akshat1308">
                  <img src={navIcon2} alt="Icon" style={{ height: "30px", width: "30px" }} />
                </a>
                <a href="https://instagram.com/akshatsurana001?igshid=MmIzYWVlNDQ5Yg==">
                  <img src={navIcon3} alt="Icon" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

const MessageSentPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 206, 158, 0.9);
  color: white;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  z-index: 999;
`;
