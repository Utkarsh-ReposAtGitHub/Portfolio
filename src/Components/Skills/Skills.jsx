import React from "react";
import "./Skills.css";
import Divider from "@mui/material/Divider";
import SkillsAccordion from "./SkillsAccordion";

function Skills() {
  return (
    <div className="skillsContainer">
      <div className="skillsContent">
        <h2>Skills</h2>
        <Divider variant="middle" color="grey" />
        <br></br>
        <div style={{ margin: "20px" }}>
          <SkillsAccordion />
        </div>
      </div>
    </div>
  );
}

export default Skills;
