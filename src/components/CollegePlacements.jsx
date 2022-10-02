import React from "react";
import { Table } from "react-bootstrap";

const CollegePlacements = ({ collegeData }) => {
  return (
    <div id="facilities" className="mt-4 mb-4">
      <h3 className="text-center mt-4 mb-4">Placements</h3>
      <div className="mx-auto w-50">
        <img
          className="w-100"
          src={collegeData.placementsImage}
          alt="placements_stats"
        />
      </div>
      <div className="mx-auto w-50">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Branch</th>
              <th>Avg CTC (in LPA)</th>
            </tr>
          </thead>
          <tbody>
            {collegeData.placements.map((course) => {
              return (
                <tr>
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

export default CollegePlacements;
