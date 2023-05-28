import "./Style/ContactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button, Form, Card, Collapse } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import "yup-phone";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const History = useNavigate();
  const [open, setOpen] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


  const validate = yup.object({
    fullname: yup.string().min(2).required(),
    email: yup.string().email().required(),
    contact: yup
    .string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
    address: yup.string().min(2).required(),
    query: yup.string().min(2).required()
  });

  const user = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      contact: "",
      address: "",
      query: ""
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      const { fullname, email, contact, address, query } = values;
        const res = await axios({ 
          method: "post",
          url: "https://v1.nocodeapi.com/roshanprajapati/google_sheets/UWqWwERnjqwcvzOG",
          params: { tabId: "Sheet1" },
          data: [
            [
              fullname,
              email,
              contact,
              address,
              query,
            ],
          ],
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
    <div className="contact-first">
      <div className="contact-1">
        <div className="contact-2">
          <div className="contact-4">
                  <Link to="/" className="contact-5">
                    Home
                  </Link> / Contact Us
          </div>
          <div className="contact-3">
            Contact Us
          </div>
        </div>
      </div>
      <div className="container">
        <div className="design d-flex justify-content-center mt-1">
          <Form method="POST" onSubmit={user.handleSubmit} className="takewidth">
            <h2 className="send">Send Your Message</h2>
            <Form.Group className="mb-3" controlId="formGridName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="fullname"
                value={user.values.fullname}
                onChange={user.handleChange}
                placeholder="Place Your Full Name Here"
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
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                value={user.values.address}
                onChange={user.handleChange}
                placeholder="Place Your Address Here"
              />
              {user.touched.address && user.errors.address && (
                <p className="error-part">{user.errors.address}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridtext">
              <Form.Label>Your query</Form.Label>
              <Form.Control
                name="query"
                value={user.values.query}
                onChange={user.handleChange}
                placeholder="Your Query"
              />
              {user.touched.query && user.errors.query && (
                <p className="error-part">{user.errors.query}</p>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br /> <br />
            
          </Form>
        </div>
      </div>
      <div className="contact-8 mt-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1832536.273081947!2d81.23209!3d26.223587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba167f16c5bc3%3A0xa0586279ae30879f!2sVibgyor%20Public%20School!5e0!3m2!1sen!2sin!4v1684425306221!5m2!1sen!2sin" 
        className="contact-9" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
        
    </div>
  );
}
