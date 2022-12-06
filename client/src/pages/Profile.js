import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styled from "styled-components";

const User = {
  firstName: "Veysel",
  lastName: "Boybay",
  address: "0000 yonge street, toronto, ontario, 123ABC",
  phoneNumber: "123456789",
  car: {
    make: "Honda",
    model: "Civic",
    year: "2015",
    color: "blue",
    transmission: "auto",
    engine: "1.8",
    fuelType: "gas",
  },
  appointments: [],
};

function Profile() {
  const [active, setActive] = useState("personal");
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col className="d-grid gap-2" md={4}>
          <Button variant="info" onClick={() => setActive("personal")}>
            Personal Information
          </Button>
          <Button variant="info" onClick={() => setActive("carDetail")}>
            Card Details
          </Button>
          <Button
            variant="info"
            onClick={() => setActive("appointmentHistory")}
          >
            Appointment History
          </Button>
        </Col>
        <Col>
          {active === "personal" && (
            <Card>
              <Section>
                <h5>Personal information:</h5>
                <p>Full Name: {User.firstName + " " + User.lastName}</p>
                <p>Phone Number: {User.phoneNumber}</p>
                <p>Address: {User.address}</p>{" "}
              </Section>
            </Card>
          )}
          {active === "carDetail" && (
            <Card>
              <Section>
                <h5>Car Details:</h5>
                <p>Year: {User.car.year}</p>
                <p>Make: {User.car.make}</p>
                <p>Model: {User.car.model}</p>
                <p>Color: {User.car.color}</p>
                <p>Transmission: {User.car.transmission}</p>
                <p>Engine: {User.car.engine}</p>
                <p>Fuel Type: {User.car.fuelType}</p>{" "}
              </Section>
            </Card>
          )}
          {active === "appointmentHistory" && (
            <Card>
              <Section>
                <h5>Appointment History:</h5>{" "}
                {User.appointments.length === 0 && (
                  <p>No Appointment history made!</p>
                )}{" "}
              </Section>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}
const Section = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
`;
export default Profile;
