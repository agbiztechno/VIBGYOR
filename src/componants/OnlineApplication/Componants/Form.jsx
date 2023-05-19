import React, { useState } from "react";
import "./Style/Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button, Form, Card, Collapse } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import "yup-phone";
import swal from "sweetalert";
import { Link } from "react-router-dom";
const Forms = () => {
  const History = useNavigate();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({ kindOfStand: "", another: "another" });


  const { kindOfStand } = item;

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = yup.object({
    AadharNumber: yup
      .string()
      .required()
      .min(12, "Too short")
      .max(12, "Too long"),
    fullname: yup.string().min(2).required(),
    birthdate: yup.date().required(),
    gender: yup.string().min(2).required(),
    FatherName: yup.string().min(2).required(),
    MotherName: yup.string().min(2).required(),
    email: yup.string().email().required(),
    contact: yup
      .string()
      .required()
      .matches(phoneRegExp, "Contact number is not valid")
      .min(10, "Too short")
      .max(10, "Too long"),
    Category: yup.string().min(2).required(),
    SubCategory: yup.string(),
    address: yup.string().min(2).required(),
    City: yup.string().min(2).required(),
    State: yup.string().min(2).required(),
    PINCode: yup
      .string()
      .required()
      .matches(/^[0-9]{5}/, "PIN Code is not valid")
      .min(6, "Too short")
      .max(6, "Too long"),
    Country: yup.string().min(2).required(),
    Hobbies: yup.string().min(2).required(),
    Admission: yup.string().min(2).required(),
    Applied: yup.string().required(),
    Study: yup.string().required(),
    Subject: yup.string(),
  });

  const user = useFormik({
    initialValues: {
      AadharNumber: "",
      fullname: "",
      birthdate: "",
      gender: "",
      FatherName: "",
      MotherName: "",
      email: "",
      contact: "",
      Category: "",
      SubCategory: "",
      address: "",
      City: "",
      State: "",
      PINCode: "",
      Country: "",
      Hobbies: "",
      Admission: "",
      Applied: "",
      Study: "",
      Subject: "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      const {
        AadharNumber,
        fullname,
        birthdate,
        gender,
        FatherName,
        MotherName,
        email,
        contact,
        Category,
        SubCategory,
        address,
        City,
        State,
        PINCode,
        Country,
        Hobbies,
        Admission,
        Applied,
        Study,
        Subject,
      } = values;
        const res = await axios({
          method: "post",
          url: "https://v1.nocodeapi.com/roshanprajapati/google_sheets/COohTyWwxYYCJskf",
          params: { tabId: "Sheet1" },
          data: [
            [
                AadharNumber,
                fullname,
                birthdate,
                gender,
                FatherName,
                MotherName,
                email,
                contact,
                Category,
                SubCategory,
                address,
                City,
                State,
                PINCode,
                Country,
                Hobbies,
                Admission,
                Applied,
                Study,
                Subject
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
    <div className="forms-first">
      <div className="container">
        <div className="design d-flex justify-content-center ">
          <Form
            method="POST"
            onSubmit={user.handleSubmit}
            className="takewidth"
          >
            <h2 className="send">STUDENT REGISTRATION FORM</h2>
            <Row className="mb-3 mt-5">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Candidate Name</Form.Label>
                <Form.Control
                  name="fullname"
                  value={user.values.fullname}
                  onChange={user.handleChange}
                  placeholder="Place Candidate Name Here"
                />
                {user.touched.fullname && user.errors.fullname && (
                  <p className="error-part">{user.errors.fullname}</p>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="AadharNumber">
                <Form.Label>Aadhar Number</Form.Label>
                <Form.Control
                  name="AadharNumber"
                  value={user.values.AadharNumber}
                  onChange={user.handleChange}
                  placeholder="AadharNumber"
                />
                {user.touched.AadharNumber && user.errors.AadharNumber && (
                  <p className="error-part">{user.errors.AadharNumber}</p>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="birthdate">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="birthdate"
                  value={user.values.birthdate}
                  onChange={user.handleChange}
                />
                {user.touched.birthdate && user.errors.birthdate && (
                  <p className="error-part">{user.errors.birthdate}</p>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  type="select"
                  name="gender"
                  className="dropdown"
                  onChange={user.handleChange}
                >
                  <option disabled hidden selected>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Form.Select>
                {user.touched.gender && user.errors.gender && (
                  <p className="error-part">{user.errors.gender}</p>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Father's Name</Form.Label>
                <Form.Control
                  name="FatherName"
                  value={user.values.FatherName}
                  onChange={user.handleChange}
                  placeholder="Place Father's Name Here"
                />
                {user.touched.FatherName && user.errors.FatherName && (
                  <p className="error-part">{user.errors.FatherName}</p>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Mother's Name</Form.Label>
                <Form.Control
                  name="MotherName"
                  value={user.values.MotherName}
                  onChange={user.handleChange}
                  placeholder="Place Mother's Name Here"
                />
                {user.touched.MotherName && user.errors.MotherName && (
                  <p className="error-part">{user.errors.MotherName}</p>
                )}
              </Form.Group>
            </Row>
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
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCategory">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  type="select"
                  name="Category"
                  className="dropdown"
                  onChange={user.handleChange}
                >
                  <option disabled hidden selected>
                    Select Category
                  </option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                </Form.Select>
                {user.touched.Category && user.errors.Category && (
                  <p className="error-part">{user.errors.Category}</p>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridSubCategory">
                <Form.Label>Sub-Category</Form.Label>
                <Form.Control
                  name="SubCategory"
                  value={user.values.SubCategory}
                  onChange={user.handleChange}
                  placeholder="N/A if not applicable"
                />
                {user.touched.SubCategory && user.errors.SubCategory && (
                  <p className="error-part">{user.errors.SubCategory}</p>
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
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="City"
                  value={user.values.City}
                  onChange={user.handleChange}
                  placeholder="Place City Here"
                />
                {user.touched.City && user.errors.City && (
                  <p className="error-part">{user.errors.City}</p>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="State">
                <Form.Label>State</Form.Label>
                <Form.Control
                  name="State"
                  value={user.values.State}
                  onChange={user.handleChange}
                  placeholder="Place State Here"
                />
                {user.touched.State && user.errors.State && (
                  <p className="error-part">{user.errors.State}</p>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="PINCode">
                <Form.Label>PIN Code</Form.Label>
                <Form.Control
                  name="PINCode"
                  value={user.values.PINCode}
                  onChange={user.handleChange}
                  placeholder="Place PIN Code Here"
                />
                {user.touched.PINCode && user.errors.PINCode && (
                  <p className="error-part">{user.errors.PINCode}</p>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  name="Country"
                  value={user.values.Country}
                  onChange={user.handleChange}
                  placeholder="Place Country Here"
                />
                {user.touched.Country && user.errors.Country && (
                  <p className="error-part">{user.errors.Country}</p>
                )}
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridHobbies">
              <Form.Label>Hobbies</Form.Label>
              <Form.Control
                name="Hobbies"
                value={user.values.Hobbies}
                onChange={user.handleChange}
                placeholder="Hobbies"
              />
              {user.touched.Hobbies && user.errors.Hobbies && (
                <p className="error-part">{user.errors.Hobbies}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAdmission">
              <Form.Label>Branch For Admission</Form.Label>
              <Form.Select
                aria-label="Default select example"
                type="select"
                name="Admission"
                className="dropdown"
                onChange={user.handleChange}
              >
                <option disabled hidden selected>
                  Select Branch
                </option>
                <option value="VIBGYOR PUBLIC SCHOOL CHANDAULI RAEBARELI">
                  VIBGYOR PUBLIC SCHOOL CHANDAULI RAEBARELI
                </option>
                <option value="VIBGYOR STUDY CIRCLE KHOYA MANDI RAEBARELI">
                  VIBGYOR STUDY CIRCLE KHOYA MANDI RAEBARELI
                </option>
                <option value="AASHIRVAD INTER COLLEGE SHAKTI NAGAR RAEBARELI">
                  AASHIRVAD INTER COLLEGE SHAKTI NAGAR RAEBARELI
                </option>
              </Form.Select>
              {user.touched.Admission && user.errors.Admission && (
                <p className="error-part">{user.errors.Admission}</p>
              )}
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridApplied">
                <Form.Label>Class / Course Applied </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  type="select"
                  name="Applied"
                  className="dropdown"
                  onChange={user.handleChange}
                >
                  <option disabled hidden selected>
                    Select Class/Course Applied
                  </option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="B.A">B.A</option>
                  <option value="BCA">BCA</option>
                  <option value="B.Com">B.Com</option>
                  <option value="B.Sc">B.Sc</option>
                </Form.Select>
                {user.touched.Applied && user.errors.Applied && (
                  <p className="error-part">{user.errors.Applied}</p>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="formGridStudy">
                <Form.Label>Medium of Study</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  type="select"
                  name="Study"
                  className="dropdown"
                  onChange={user.handleChange}
                >
                  <option disabled hidden selected>
                    Select Medium of Study
                  </option>
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
                </Form.Select>
                {user.touched.Study && user.errors.Study && (
                  <p className="error-part">{user.errors.Study}</p>
                )}
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridSubject">
              <Form.Label>Enter Subject</Form.Label>
              <Form.Control
                name="Subject"
                value={user.values.Subject}
                onChange={user.handleChange}
                placeholder="N/A if not applicable"
              />
              {user.touched.Subject && user.errors.Subject && (
                <p className="error-part">{user.errors.Subject}</p>
              )}
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br /> <br />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
