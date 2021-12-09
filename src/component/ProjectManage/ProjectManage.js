import React from "react";
import "./ProjectManage.css";

const ProjectManage = () => {
  return (
    <div>
      <div className="container mb-4">
        <div className="row d-flex justify-content-start align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold">Project Management</h1>
            <p className="lh-lg">
              What's an event without any co-ordination? <br /> We have a dedicated SOP
              as a Project manager ensuring flawless event <br /> management from
              branding, marketing, design and post-event thanking gesture
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid w-75" src="https://i.postimg.cc/mZ1b62N3/Frame-Copy.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManage;
