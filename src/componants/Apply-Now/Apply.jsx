import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, Form, Card, Collapse } from "react-bootstrap";
import "./Apply.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Apply = () => {
  const History = useNavigate();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const validate = yup.object({
    fullname: yup.string().min(2).required(),
    email: yup.string().email().required(),
    contact: yup
      .string()
      .required()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long"),
    cardtype: yup.string().min(2).required(),
    carddetails: yup.string().min(2).required(),
  });

  const user = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      contact: "",
      cardtype: "",
      carddetails: "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      const yourquery = "";
      const { fullname, email, contact, cardtype, carddetails } = values;
      console.log(fullname, email, contact, cardtype, carddetails, yourquery);
      const res = await axios({
        method: "post",
        url: "https://v1.nocodeapi.com/roshanprajapati/google_sheets/knVODJeTTOlDMAfj",
        params: { tabId: "Sheet1" },
        data: [
          [fullname,email,contact,cardtype,carddetails,yourquery]
        ],
      })
        .then(function (response) {
          // handle success
          console.log(response.data);
          swal("Send", "Your message sent successfully!", "success").then(
            (value) => {
              location.reload();
            }
          );
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          swal("Error", "All field are required", "warning");
        });
    },
  });
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={handleClickOpen}>
          Book
        </div>
      )}
      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          onSubmit={user.handleSubmit}
        >
          <DialogContent>
            <DialogContentText id="dalogbox">
              <Form
                method="POST"
                onSubmit={user.handleSubmit}
                className="takewidth"
              >
                <h2 className="send">Book Now</h2>
                <Form.Group className="mb-3" controlId="formGridName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    name="fullname"
                    value={user.values.fullname}
                    onChange={user.handleChange}
                    placeholder="Enter Full Name Here"
                  />
                  {user.touched.fullname && user.errors.fullname && (
                    <p className="error-part">{user.errors.fullname}</p>
                  )}
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      value={user.values.email}
                      onChange={user.handleChange}
                      type="email"
                      placeholder="Enter email"
                    />
                    {user.touched.email && user.errors.email && (
                      <p className="error-part">{user.errors.email}</p>
                    )}
                  </Form.Group>

                  <Form.Group as={Col} controlId="Contact">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control
                      name="contact"
                      value={user.values.contact}
                      onChange={user.handleChange}
                      placeholder="Contact"
                    />
                    {user.touched.contact && user.errors.contact && (
                      <p className="error-part">{user.errors.contact}</p>
                    )}
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress">
                  <Form.Label>Explain Card Type</Form.Label>
                  <Form.Control
                    name="cardtype"
                    value={user.values.cardtype}
                    onChange={user.handleChange}
                    placeholder="Enter Card Type Here"
                  />
                  {user.touched.cardtype && user.errors.cardtype && (
                    <p className="error-part">{user.errors.cardtype}</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridtext">
                  <Form.Label>Explain Card Details</Form.Label>
                  <Form.Control
                    name="carddetails"
                    value={user.values.carddetails}
                    onChange={user.handleChange}
                    placeholder="Enter Card Details Here"
                  />
                  {user.touched.carddetails && user.errors.carddetails && (
                    <p className="error-part">{user.errors.carddetails}</p>
                  )}
                </Form.Group>
                <Button variant="primary" type="submit" id="galllay-button">
                  Submit
                </Button>
                <br /> <br />
              </Form>
            </DialogContentText>
          </DialogContent>
        </Dialog>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .top-btn {
    font-weight: bold;
    font-size: 20px;
    width: 80px;
    height: 80px;
    color: #fff;
    background-color: rgb(181, 112, 1);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 50%;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
  @media screen and (max-width: 600px) {
    .top-btn {
      font-size: 10px;
      width: 60px;
      height: 60px;
      right: 0;
      left: 80%;
      bottom: 2rem;
    }
  }
`;

export default Apply;
