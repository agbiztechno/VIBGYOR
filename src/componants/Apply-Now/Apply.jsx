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
  const handleClickOpen = () => {
    History('/Online-Application');
  };
  return (
    <Wrapper>
        <div className="top-btn" onClick={handleClickOpen}>
          Apply
        </div>
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
    background-color: #ad1f24ce;
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
