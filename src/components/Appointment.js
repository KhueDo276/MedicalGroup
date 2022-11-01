import React, { useState } from "react";
import "./Appointment.css";

function Appointment() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("999-999-9999");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [clinic, setClinic] = useState("");

  return (
    <div className="appointment">
      <h1>Make an Appointment</h1>
      <form>
        <label>Last Name:</label>
        <span>
          <input
            type="text"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </span>

        <label>First Name:</label>
        <span>
          <input
            type="text"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </span>
        <label>Middle Name:</label>
        <span>
          <input
            type="text"
            required
            value={middlename}
            onChange={(e) => setMiddlename(e.target.value)}
          />
        </span>
      </form>
      <form>
        <label>Phone:</label>
        <span>
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </span>
        <label>Email:</label>
        <span>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <label>Clinic:</label>
        <select value={clinic} onChange={(e) => setClinic(e.target.value)}>
          <option value="1">Number 1</option>
          <option value="2">Number 2</option>
        </select>
      </form>
      <form>
        <label>Select Date:</label>
        <span>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </span>
        <label>Select a time:</label>
        <span>
          <input
            type="text"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </span>

        <label>Reason:</label>
        <span>
          <input
            type="text"
            required
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </span>
      </form>
      <button>Add</button>
    </div>
  );
}

export default Appointment;
