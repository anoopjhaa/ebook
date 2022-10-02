import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CollegeCard({ collegeCard }) {
  const link = `/college/${collegeCard.id}`;
  return (
    <div
      className="col-12 col-md-6 col-lg-4 mx-auto text-center"
      style={{
        paddingTop: "2vh",
        display: "flex",
        padding: "2px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card style={{ width: "60vh" }}>
        <Card.Img
          variant="top"
          src={collegeCard.poster}
          style={{ height: "35vh" }}
        />
        <Card.Body>
          <Card.Title>{collegeCard.name}</Card.Title>
          <Card.Text>{collegeCard.desc}</Card.Text>
          <Button variant="primary">
            <Link
              to={link}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Find Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CollegeCard;
