import React from "react";
import Table from "react-bootstrap/Table";

const CollegeFeeStructure = ({ collegeData }) => {
  return (
    <div id="facilities" className="mt-4 mb-4">
      <h3 className="text-center mt-4 mb-4">Fee Structure</h3>
      <div className="mx-auto w-50">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Particulars</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {collegeData.fees.map((fee) => {
              return (
                <tr>
                  <td>{fee[0]}</td>
                  <td>{fee[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CollegeFeeStructure;
