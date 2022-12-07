import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormSelect from "react-bootstrap/FormSelect";
import FormCheck from "react-bootstrap/FormCheck";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
const car = {
  make: "Honda",
  model: "Civic",
  year: "2015",
  color: "blue",
  transmission: "auto",
  engine: "1.8",
  fuelType: "gas",
};

const appointmentForm = {
  // update the userid with actual user
  userId: "12345",
  carDetails: car,
  mechanic: "",
  repariDescription: "",
  urgent: false,
  comeToMe: false,
  extraDescription: "",
  selectedDate: "",
  selectedTime: "",
};

function AppointmentForm() {
  const [errorMessage, setErrorMessage] = useState("No Error!");
  const [form, setForm] = useState(appointmentForm);
  const [isChecked, setIsChecked] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [comeToMe, setComeToMe] = useState(false);
  const checkTerms = useRef();
  const submitForm = () => {
    console.log(form);
  };
  const handleCheck = () => {
    setIsChecked(checkTerms.current.checked);
  };
  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Set an Appointment
      </h2>
      {errorMessage !== "No Error!" && <ShowError>{errorMessage}</ShowError>}
      <Row className="justify-content-md-center">
        <Form.Label style={{ fontWeight: "bold" }}>
          Your Car Details;
        </Form.Label>
        <p>
          {car.make} {car.model} {car.year} {car.color} {car.transmission}{" "}
          transmission {car.engine} engine and fuel type: {car.fuelType}
        </p>
      </Row>
      <Row className="justify-content-sm-center">
        <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ fontWeight: "bold" }}>
            Select Mechanic
          </Form.Label>
          <FormSelect
            aria-label="Default select example"
            onChange={(event) => {
              setForm({ ...form, mechanic: event.target.value });
            }}
          >
            <option>Select here</option>
            <option value="hondaDowntown">Honda Downtown</option>
            <option value="hondaMidtown">Honda Midtown</option>
            <option value="hondaUptown">Honda Uptown</option>
          </FormSelect>
        </FormGroup>
        <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ fontWeight: "bold" }}>
            Provide a Description
          </Form.Label>
          <FormControl
            as="textarea"
            rows={3}
            onChange={(event) => {
              setForm({
                ...form,
                repariDescription: event.target.value === "on" ? true : false,
              });
            }}
          />
        </FormGroup>
      </Row>
      <Row style={{ marginTop: "20px", marginBottom: "40px" }}>
        <Col>
          <FormCheck
            type="checkbox"
            label="Urgent"
            onChange={(e) => {
              setUrgent(!urgent);
              setForm({
                ...form,
                urgent: e.target.value === "on" ? true : false,
              });
            }}
            // ref={checkTerms}
            // style={isChecked === false ? { color: "red" } : { color: "green" }}
            // checked={isChecked}
          />
        </Col>
        <Col>
          <FormCheck
            type="checkbox"
            label="I want mechanic comes to my place"
            onChange={() => {
              setComeToMe(!comeToMe);
              setForm({ ...form, comeToMe: true });
            }}
            // ref={checkTerms}
            // style={isChecked === false ? { color: "red" } : { color: "green" }}
            // checked={isChecked}
          />
        </Col>
      </Row>
      <Row
        // style={{ marginTop: "20px", marginBottom: "40px" }, }
        style={
          urgent || comeToMe === true
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <Col>
          <Form.Label style={{ fontWeight: "bold" }}>
            Provide an Address Description
          </Form.Label>
          <FormControl
            as="textarea"
            rows={3}
            onChange={(event) => {
              setForm({ ...form, extraDescription: event.target.value });
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={2}>
          <Form.Text style={{ fontWeight: "bold" }}>Select Date</Form.Text>
        </Col>
        <Col md={4}>
          <FormControl
            type="date"
            name="date_of_appointment"
            onChange={(event) => {
              setForm({ ...form, selectedDate: event.target.value });
            }}
          />
        </Col>
        <Col md={2}>
          <Form.Text style={{ fontWeight: "bold" }}>Select Time</Form.Text>
        </Col>
        <Col md={4}>
          <FormControl
            type="time"
            name="date_of_appointment"
            onChange={(event) => {
              setForm({ ...form, selectedTime: event.target.value });
            }}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px", marginBottom: "40px" }}>
        <Col>
          <FormCheck
            type="checkbox"
            label="Accept Terms & Conditions"
            onChange={handleCheck}
            ref={checkTerms}
            style={isChecked === false ? { color: "red" } : { color: "green" }}
            checked={isChecked}
          />
          <Button
            variant="primary"
            type="submit"
            onClick={() => submitForm()}
            disabled={isChecked === false && true}
            style={{ marginTop: "10px" }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
const ShowError = styled.div`
  display: block;
  background-color: #e5a8b7;
  color: black;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
`;
export default AppointmentForm;
