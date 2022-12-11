import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Table from "react-bootstrap/Table";
import styled from "styled-components";

const User = {
  firstName: "John",
  lastName: "Smith",
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
  appointments: [
    {
      date: "12/12/2022",
      time: "11:15",
      mechanic: "Honda Downtown",
      resolved: "In Progress",
      issue: "Oil Change",
    },
    {
      date: "12/12/2022",
      time: "16:15",
      mechanic: "Honda Downtown",
      resolved: "completed",
      issue: "Brakes Change",
    },
    {
      date: "10/10/2022",
      time: "10:10",
      mechanic: "Honda Downtown",
      resolved: "completed",
      issue: "Filters Change",
    },
    {
      date: "05/36/2022",
      time: "11:11",
      mechanic: "Honda Downtown",
      resolved: "completed",
      issue: "General Maintenance",
    },
  ],
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
              <Card style={{ marginTop: "30px" }}>
                <Card.Header as="h5">All Appointments</Card.Header>
                <Card.Body>
                  {User.appointments.length === 0 && (
                    <Card.Text>No appointment data available.</Card.Text>
                  )}
                  {User.appointments.length !== 0 && (
                    <Table striped>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Mechanic</th>
                          <th>Issue</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Resolved</th>
                        </tr>
                      </thead>
                      <tbody>
                        {User.appointments.map((appointment, index) => {
                          return (
                            <tr
                              style={
                                appointment.resolved === "In Progress"
                                  ? { backgroundColor: "greenyellow" }
                                  : {}
                              }
                              key={index}
                            >
                              <td>{index + 1}</td>
                              <td>{appointment.mechanic}</td>
                              <td>{appointment.issue}</td>
                              <td>{appointment.date}</td>
                              <td>{appointment.time}</td>
                              <td>{appointment.resolved}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  )}
                </Card.Body>
              </Card>
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
