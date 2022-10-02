import React from "react";
import Table from "react-bootstrap/Table";

import { GiCommercialAirplane } from "react-icons/gi";
import { BiTrain, BiBus } from "react-icons/bi";

const CollegeConnectivity = ({ collegeData }) => {
  return (
    <div>
      <div id="overview" className="mt-4 mb-4">
        <h3 className="text-center mt-4 mb-4">Connectivity (How to reach)</h3>
        <Table striped bordered hover>
          <tbody className="text-center align-middle">
            <tr>
              <th>Mode of Transport</th>
              <th>Point of Boarding</th>
              <th>Distance from Institution</th>
            </tr>
            <tr>
              <th>
                <GiCommercialAirplane size={60} />
              </th>
              <td>{collegeData.airportName}</td>
              <td>{collegeData.airportDistance} km</td>
            </tr>
            <tr>
              <th>
                <BiTrain size={60} />
              </th>
              <td>{collegeData.railwayName}</td>
              <td>{collegeData.railwayDistance} km</td>
            </tr>
            <tr>
              <th>
                <BiBus size={60} />
              </th>
              <td>{collegeData.busName}</td>
              <td>{collegeData.busDistance} km</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CollegeConnectivity;
