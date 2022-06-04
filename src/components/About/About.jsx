import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>Make it work, make it right, make it fast</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="} alt="Abhi" className="aboutAvatar" />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
          Portfolio Website
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
             We are  passionate a computer science students specialized in Full Stack Development,
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
