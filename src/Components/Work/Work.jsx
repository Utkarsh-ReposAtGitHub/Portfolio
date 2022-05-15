import React from "react";
import "./Work.css";
import WorkTabs from "./WorkTabs";

function Work() {
  return (
    <div className="workContainer">
      <div className="workContent">
        {/* <h2>Work</h2>
        <Divider variant="middle" color="grey" /> */}
        {/* <br></br> */}
        <div style={{ margin: "20px" }}>
          <WorkTabs />
        </div>
      </div>
    </div>
  );
}

export default Work;
