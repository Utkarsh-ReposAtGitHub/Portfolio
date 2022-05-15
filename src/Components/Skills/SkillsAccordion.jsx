import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { SiSpring } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GiCheckboxTree } from "react-icons/gi";
import { SiReact } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .07)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "rgba(0,0,0,.03)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Technology</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <Typography>
              <SiSpring />
              &emsp;Spring Boot
            </Typography>
            <Typography>
              <SiJava />
              &emsp;Java
            </Typography>
            <Typography>
              <SiJavascript />
              &emsp;JavaScript
            </Typography>
            <Typography>
              <GiCheckboxTree />
              &emsp;Microservices
            </Typography>
            <Typography>
              <SiReact />
              &emsp;ReactJS
            </Typography>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <Typography>
              <SiSpringboot />
              &emsp;Spring Tool Suit
            </Typography>
            <Typography>
              <SiVisualstudiocode />
              &emsp;Visual Studio Code
            </Typography>
            <Typography>
              <SiPostman />
              &emsp;Postman
            </Typography>
            <Typography>
              <SiAmazonaws />
              &emsp;Amazon Web Services
            </Typography>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Database</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <Typography>
              <SiMysql />
              &ensp;MySQL
            </Typography>
            <Typography>
              <SiPostgresql />
              &ensp;PostgreSQL
            </Typography>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
