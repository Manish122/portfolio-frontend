import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Contact.css";
import { useAlert } from "react-alert";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form className="contactContainerForm" >
          <Typography variant="h4">Contact Us</Typography>

          <input
            type="text"
            placeholder="Name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            required
          />

          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
          ></textarea>
          <Button variant="contained" type="submit" >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
