import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function User() {
  return (
    <>
      <form>
        <h3>Crime Complaint</h3>
        <div className="mb-2">
          <label>Full name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-2">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-2">
        <label for="exampleFormControlTextarea1" class="form-label">Details About Crime</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="mb-2">
          <label>Adharcard number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter adharcard number"
            min = "16" max = "16"
          />
        </div>



        <div className="mb-2">
          <label>Date of Crime</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter Crime Date"
            
          />
        </div>
        <div className="mb-2">
          <label>Address</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter address"
          />
        </div>
        <label for="appt">Select a time When crime Happenend</label>
<input type="time" id="appt" name="appt"/>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

      </form>
    </>
  );
}

export default User;
