import React, { useState } from "react";
import "./Employee.css";

function Employee() {
  const [title, setTitle] = useState("Others");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [ssn, setSsn] = useState(1234);
  const [sex, setSex] = useState("Female");
  const [birthdate, setBirthdate] = useState("01/01/2020");
  const [salary, setSalary] = useState("100,000");
  const [hours, setHours] = useState("");
  const [phone, setPhone] = useState("999-999-9999");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="employee">
      <h1>Employee Fill Out Form</h1>
      <form>
        <label>Title:</label>
        <select value={title} onChange={(e) => setTitle(e.target.value)}>
          <option value="doctor">Doctor</option>
          <option value="nurse">Nurse</option>
          <option value="others">Others</option>
        </select>

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
        <label>Last 4 SSN:</label>
        <span>
          <input
            type="text"
            required
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
          />
        </span>
        <label>Sex:</label>
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <label>Birth Date:</label>
        <span>
          <input
            type="date"
            required
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </span>
        <label>Salary:</label>
        <span>
          <input
            type="text"
            required
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </span>
      </form>
      <form>
        <label>Hours:</label>
        <select value={hours} onChange={(e) => setHours(e.target.value)}>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
        </select>
        <label>Phone:</label>
        <span>
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </span>
        <label>Address:</label>
        <span>
          <input
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
      </form>
      <button>Add</button>
    </div>
  );
}

export default Employee;
