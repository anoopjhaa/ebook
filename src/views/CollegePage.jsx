import React from "react";

import CollegeHeader from "../components/CollegeHeader";
import CollegeOverview from "../components/CollegeOverview";
import CollegeConnectivity from "../components/CollegeConnectivity";
import CollegeFacilities from "../components/CollegeFacilities";
import CollegeAdmissionModes from "../components/CollegeAdmissionModes";
import CollegeCoursesOffered from "../components/CollegeCoursesOffered";
import CollegeFeeStructure from "../components/CollegeFeeStructure";
import CollegePlacements from "../components/CollegePlacements";
import CollegeVirtualTour from "../components/CollegeVirtualTour";
import { useParams } from "react-router-dom";

const CollegePage = ({ collegeData }) => {
  const { id } = useParams();
  const filteredCollegeData = collegeData.find((college) => college.id === id);
  console.log(filteredCollegeData);
  return (
    <div>
      <CollegeHeader collegeData={filteredCollegeData} />
      <hr />
      <CollegeOverview collegeData={filteredCollegeData} />
      <hr />
      <CollegeConnectivity collegeData={filteredCollegeData} />
      <hr />
      <CollegeVirtualTour collegeData={filteredCollegeData} />
      <hr />
      <CollegeFacilities collegeData={filteredCollegeData} />
      <hr />
      <CollegeAdmissionModes collegeData={filteredCollegeData} />
      <hr />
      <CollegeCoursesOffered collegeData={filteredCollegeData} />
      <hr />
      <CollegeFeeStructure collegeData={filteredCollegeData} />
      <hr />
      <CollegePlacements collegeData={filteredCollegeData} />
    </div>
  );
};

export default CollegePage;
