import React from "react";

const CollegeVirtualTour = ({ collegeData }) => {
  return (
    <div id="facilities" className="mt-4 mb-4">
      <h3 className="text-center mt-4 mb-4">Virtual Tour</h3>
      <div className="mx-auto w-50">
        <iframe
          title="Virtual Tour"
          src={collegeData.tour}
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default CollegeVirtualTour;
