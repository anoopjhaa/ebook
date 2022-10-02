import React from "react";
import MainCarousel from "../components/Carousel";
import CollegeSearch from "../components/CollegeSearch";

const LandingPage = ({ collegeData }) => {
  return (
    <div>
      <MainCarousel />
      <CollegeSearch collegeData={collegeData} />
    </div>
  );
};

export default LandingPage;
