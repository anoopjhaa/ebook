import React from "react";
import Table from "react-bootstrap/Table";

const CollegeCoursesOffered = ({ collegeData }) => {
  return (
    <div id="facilities" className="mt-4 mb-4">
      <h3 className="text-center mt-4 mb-4">Courses Offered</h3>
      <div className="mx-auto w-50">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Branch</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            {collegeData.courses.map((course, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{course[0]}</td>
                  <td>{course[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CollegeCoursesOffered;
