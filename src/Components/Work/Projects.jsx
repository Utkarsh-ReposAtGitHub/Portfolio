import React from "react";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./Projects.css";

function Projects() {
  return (
    <div className="projectDiv">
      <Card className="projectCards">
        <CardContent>
          <Typography varient="h4">Weather API</Typography>
          <br />
          <Typography variant="body2" sx={{ fontWeight: "300" }}>
            This weater API is a react Application to monitor Weather changes
            and forcasts.
          </Typography>
        </CardContent>
        <CardActions className="cardAction">
          <Button className="gitButton" startIcon={<GitHubIcon />}>
            Git Repository
          </Button>
        </CardActions>
      </Card>
      <br />
      <Card className="projectCards">
        <CardContent>
          <Typography varient="h4">E-Commerce Website</Typography>
          <br />
          <Typography variant="body2" sx={{ fontWeight: "300" }}>
            This E-Commerce Website is a react Application to buy and sell goods
            and comodities.
          </Typography>
        </CardContent>
        <CardActions className="cardAction">
          <Button className="gitButton" startIcon={<GitHubIcon />}>
            Git Repository
          </Button>
        </CardActions>
      </Card>
      <br />
      <Card className="projectCards">
        <CardContent>
          <Typography varient="h4">Micro Blogging Webpage</Typography>
          <br />
          <Typography variant="body2" sx={{ fontWeight: "300" }}>
            This Blogging Webpage is a platform which provides community to
            discuss ideas.
          </Typography>
        </CardContent>
        <CardActions className="cardAction">
          <Button className="gitButton" startIcon={<GitHubIcon />}>
            Git Repository
          </Button>
        </CardActions>
      </Card>
      <br />
      <Card className="projectCards">
        <CardContent>
          <Typography varient="h4">ChatBot App</Typography>
          <br />
          <Typography variant="body2" sx={{ fontWeight: "300" }}>
            This Chat Application is a react Application for easier navigation.
          </Typography>
        </CardContent>
        <CardActions className="cardAction">
          <Button className="gitButton" startIcon={<GitHubIcon />}>
            Git Repository
          </Button>
        </CardActions>
      </Card>
      <br />
    </div>
  );
}

export default Projects;
