import React, { useEffect, useState } from "react";
import "./Style/MapForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, Form, Card, Collapse } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "yup-phone";
import axios from "axios";
const MapForm = () => {
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
    yourquery: yup.string(),
  });

  const user = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      contact: "",
      yourquery: "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      const cardtype = "";
      const carddetails = "";
      const { fullname, email, contact, yourquery } = values;
      const res = await axios({
        method: "post",
        url: "https://v1.nocodeapi.com/roshanprajapati/google_sheets/knVODJeTTOlDMAfj",
        params: { tabId: "Sheet1" },
        data: [[fullname, email, contact, cardtype, carddetails, yourquery]],
      })
        .then(function (response) {
          // handle success
          console.log(response.data);
          swal("Send", "Your message sent successfully!", "success").then(
            (value) => {
              History("/");
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
  return (
    <div className="MapForm">
      <div className="container">
        <div className="row MapForm-1">
          <Form
            method="POST"
            onSubmit={user.handleSubmit}
            className="col-lg-8 col-md-10 col-12 takewidth"
          >
            <h2 className="send">Send Message</h2>
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
            <Form.Group className="mb-3" controlId="formGridtext">
              <Form.Label>Your Query</Form.Label>
              <Form.Control
                name="yourquery"
                value={user.values.carddetails}
                onChange={user.handleChange}
                placeholder="Enter Your Query.."
                as="textarea" rows={5}
              />
            </Form.Group>
            <Button variant="primary" type="submit" id="galllay-button">
              Submit
            </Button>
            <br /> <br />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MapForm;
