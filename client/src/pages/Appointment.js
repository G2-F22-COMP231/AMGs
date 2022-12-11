import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const dummy_data = [
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
];
function Appointment() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/setAppointment");
  };
  return (
    <Container style={{ marginTop: "40px" }}>
      <Card>
        <Card.Header as="h5">Set New Appointment</Card.Header>
        <Card.Body>
          <Card.Text>
            You need a repair service? Let's have an appointment.
          </Card.Text>
          <Button variant="primary" onClick={handleSubmit}>
            Set an appointment
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ marginTop: "30px" }}>
        <Card.Header as="h5">All Appointments</Card.Header>
        <Card.Body>
          {dummy_data.length === 0 && (
            <Card.Text>No appointment data available.</Card.Text>
          )}
          {dummy_data.length !== 0 && (
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
                {dummy_data.map((appointment, index) => {
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
    </Container>
  );
}

export default Appointment;
