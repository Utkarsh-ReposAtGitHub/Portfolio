import React from "react";
import "./About.css";
import profileImage from "./profilePImg.jpg";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

const About = () => {
  const gitUrl = "https://github.com/Utkarsh-ReposAtGitHub";
  const linkedInUrl = "https://www.linkedin.com/in/utkarsh-chandra-120a8715b/";
  const gmailUrl = "mailto:utkarshen1067@gmail.com";
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        {/* Name and Avatar display */}
        <div className="myInfo">
          <Avatar
            alt="Utkarsh Chandra"
            src={profileImage}
            sx={{ width: 200, height: 200 }}
          />
          <Divider variant="middle" size={5} />
          <div className="myName">UTKARSH CHANDRA</div>
          <div className="myDesignation">Full Stack Developer</div>
        </div>
        {/* Social handles */}
        <div className="mySocial">
          <Stack direction="row" spacing={2}>
            <Chip
              color="primary"
              variant="outlined"
              size="small"
              icon={<GitHubIcon />}
              label="Github"
              clickable="true"
              onClick={() => openUrlOnClick(gitUrl)}
            />
            <Chip
              color="primary"
              variant="outlined"
              size="small"
              icon={<LinkedInIcon />}
              label="LinkedIn"
              clickable="true"
              onClick={() => openUrlOnClick(linkedInUrl)}
            />
            <Chip
              color="primary"
              variant="outlined"
              size="small"
              icon={<MailRoundedIcon />}
              label="Gmail"
              clickable="true"
              onClick={() => openUrlOnClick(gmailUrl)}
            />
          </Stack>
        </div>

        {/* Describe Objective of Portfolio */}
        <div className="myObjective">
          <p>
            Application Developer with Industry experience in Full-Stack Web
            Development with leading IT Companies. Worked on large-scale
            projects with clients from financial services and Banks with complex
            architecture. Looking forward to work for challenging technical
            requirements. Feel free to navigate to know more.
          </p>
          <br></br>
          <Divider variant="middle" color="whitesmoke" />
        </div>
      </div>
    </div>
  );
};

function openUrlOnClick(url) {
  return window.open(url);
}
export default About;
