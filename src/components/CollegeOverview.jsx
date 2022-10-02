import React from "react";
import Table from "react-bootstrap/Table";

const CollegeOverview = ({ collegeData }) => {
  return (
    <div>
      <div id="overview" className="mt-4">
        <h3 className="text-center mb-4">Overview</h3>
        <Table striped bordered hover>
          <tbody className="text-center">
            <tr>
              <th>Institute Name</th>
              <td>{collegeData.name}</td>
            </tr>
            <tr>
              <th>Institute Type</th>
              <td>{collegeData.instituteType}</td>
            </tr>
            <tr>
              <th>Established</th>
              <td>{collegeData.established}</td>
            </tr>
            <tr>
              <th>Institute Address</th>
              <td>{collegeData.address}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CollegeOverview;
