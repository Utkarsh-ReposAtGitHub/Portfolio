import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

function Experience() {
  return (
    <div style={{ fontSize: "13px", fontWeight: "300" }}>
      <Box className="IBM Experience">
        <ul>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            <span style={{ fontWeight: "500" }}>Company:</span> IBM
          </Typography>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            <span style={{ fontWeight: "500" }}>Client:</span> Trustee Savings
            Bank - United Kingdom
          </Typography>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            <span style={{ fontWeight: "500" }}>Role:</span> Full Stack
            Developer
          </Typography>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            <span style={{ fontWeight: "500" }}>Technology:</span> Java 8,
            Spring Boot, Microservices, Mockito, AngularJS
          </Typography>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            January, 2022 - Present
          </Typography>
        </ul>
        <ul>
          <li sx={{ fontWeight: "300", fontSize: "13px" }}>
            Developed REST APIs from scratch to connect and retrieve data from
            Fiserv Third Party API via Proxy.
          </li>
          <li sx={{ fontWeight: "300", fontSize: "13px" }}>
            Optimization of Context Manger for JWT Token management saved 30% of
            extra calls and processing.
          </li>
          <li sx={{ fontWeight: "300", fontSize: "13px" }}>
            Developed web pages using AngularJS with API integration.
          </li>
        </ul>
      </Box>
      <Divider variant="middle" />
      <br></br>
      <Box className="TCS Experience">
        <ul>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            <span style={{ fontWeight: "500" }}>Company:</span> Tata Consultancy
            Services
          </Typography>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            <span style={{ fontWeight: "500" }}>Client:</span> Western Union
            Financial Services Company
          </Typography>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            <span style={{ fontWeight: "500" }}>Role:</span> Backend Developer
          </Typography>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            <span style={{ fontWeight: "500" }}>Technology:</span> Java 8,
            Spring Boot, Microservices, AWS Fargate, PostgreSQL, Docker
          </Typography>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            August, 2019 - January, 2022
          </Typography>
        </ul>
        <ul>
          <li sx={{ fontWeight: "300", fontSize: "13px" }}>
            Developed REST APIs from scratch accessable via all Western Union
            channels for Cancellation and Refund of Global Transaction.
          </li>
          <li sx={{ fontWeight: "300", fontSize: "13px" }}>
            Deployed APIs as Microservices using Docker containerization at AWS
            Fargate Services.
          </li>
          <li sx={{ fontWeight: "300", fontSize: "13px" }}>
            Implemented fault tolerance using Histrix circuit breaker,
            authentiation using OAuth 2.0, setup monitoring tool using ELK
            Dashboard.
          </li>
        </ul>
      </Box>
      <br></br>
    </div>
  );
}

export default Experience;
