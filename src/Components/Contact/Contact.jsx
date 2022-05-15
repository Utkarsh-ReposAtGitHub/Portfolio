import React from "react";
import "./Contact.css";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CallIcon from "@mui/icons-material/Call";
import Stack from "@mui/material/Stack";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";
import Chip from "@mui/material/Chip";
import cv from "./UtkarshChandraCV.pdf";
import { saveAs } from "file-saver";

const Contact = () => {
  const saveFile = () => {
    saveAs(cv, "UtkarshChandra.pdf");
  };

  return (
    <div className="contactsContainer">
      <div className="contactContent">
        <Box
          sx={{
            width: "80%",
            height: "35%",
            p: "20px",
          }}
        >
          <h2 style={{ margin: "15px" }}>Contact Details</h2>
          <Divider variant="middle" color="grey" />
          <div style={{ margin: "15px" }}>
            <Stack direction="row" spacing={4}>
              <CallIcon />
              <p style={{ fontSize: "17px" }}>+91-9559881201</p>
            </Stack>
            <br></br>
            <Stack direction="row" spacing={4}>
              <MailRoundedIcon />
              <p style={{ fontSize: "17px" }}>utkarshen1067@gmail.com</p>
            </Stack>
            <br></br>
            <Stack direction="row" spacing={4}>
              <LocationOnIcon />
              <p style={{ fontSize: "17px" }}>India</p>
            </Stack>
          </div>
        </Box>
        <Chip
          color="primary"
          variant="outlined"
          size="small"
          icon={<DownloadIcon />}
          label="Curriculum Vitae"
          clickable="true"
          onClick={saveFile}
        />
      </div>
    </div>
  );
};
export default Contact;
