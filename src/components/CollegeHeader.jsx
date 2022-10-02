import React from "react";

const CollegeHeader = ({ collegeData }) => {
  return (
    <div>
      <div id="header" style={{ backgroundColor: "#28323B" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#28323B",
            paddingTop: "6vh",
          }}
        >
          <img
            src={collegeData.logo}
            style={{
              height: "26vh",
              backgroundColor: "#fff",
              margin: "1vh",
              padding: "2vh",
              border: "10px solid",
            }}
            alt="clg-logo"
          />
        </div>

        <div
          className="text-center"
          style={{ paddingTop: "2vh", paddingBottom: "3vh" }}
        >
          <h2 style={{ color: "#fff", display: "block" }}>
            {collegeData.name}
          </h2>
          <p style={{ color: "#fff", display: "block" }}>
            {collegeData.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollegeHeader;
