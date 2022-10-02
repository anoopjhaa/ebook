import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CollegeCard from "./CollegeCard";

const SearchBar = ({ collegeData }) => {
  const [text, setText] = useState("");

  return (
    <div className="mx-auto">
      <div className="mx-auto" style={{ width: "40vh", paddingTop: "7vh" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter College name"
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <hr />
      <div className="row justify-content-center">
        {collegeData
          .filter((college) => {
            if (text === "") {
              return college;
            } else if (
              college.name.toLowerCase().includes(text.toLowerCase())
            ) {
              return college;
            }
            return null;
          })
          .map((college) => {
            return <CollegeCard key={college.id} collegeCard={college} />;
          })}
      </div>
    </div>
  );
};

export default SearchBar;
