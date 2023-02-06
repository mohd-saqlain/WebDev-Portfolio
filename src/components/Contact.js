import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Assests/images/contact-img.svg";
import { useForm } from "react-hook-form";

const Contact = () => {
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
  // const [users, setUsers] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormDetails({ ...formDetails, [name]: value });
  };

  // const handleSubmits = (e) => {
  //   e.preventDefault();
  //   const newUser = { ...formDetails, id: new Date().getTime().toString() };
  //   console.table(newUser);
  //   setUsers([...users, newUser]);
  // };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="ContactImg" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form
              action="https://formspree.io/f/mayzqekd"
              method="POST"
            >
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    // {formDetails.firstName}
                    name="firstName"
                    onChange={handleInput}
                    placeholder="First Name"
                    autoComplete="off"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <span id="err-msg">Fill this Field</span>
                  )}
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    // {formDetails.lastName}
                    name="lastName"
                    onChange={handleInput}
                    placeholder="Last Name"
                    autoComplete="off"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && <span id="err-msg">Fill this Field</span>}
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    // {formDetails.email}
                    name="email"
                    onChange={handleInput}
                    placeholder="example@gmail.com"
                    autoComplete="off"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  {errors.email && <span id="err-msg">Fill this Field</span>}
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="num"
                    // {formDetails.phone}
                    name="phone"
                    onChange={handleInput}
                    placeholder="Phone No."
                    autoComplete="off"
                    {...register("num", { required: true })}
                  />
                  {errors.num && <span id="err-msg">Fill this Field</span>}
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <textarea
                    rows="6"
                    name="message"
                    // {formDetails.message}
                    onChange={handleInput}
                    placeholder="Message"
                    autoComplete="off"
                    {...register("message", { required: true })}
                  ></textarea>
                  {errors.message && <span id="err-msg">Fill this Field</span>}

                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
