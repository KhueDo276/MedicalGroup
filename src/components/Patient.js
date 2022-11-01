import React, { useState } from "react";
import "./Employee.css";

function Patient() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [patientid, setPatientid] = useState(123456);
  const [sex, setSex] = useState("Female");
  const [birthdate, setBirthdate] = useState("01/01/2020");
  const [height, setHeight] = useState(158);
  const [weight, setWeight] = useState(105);
  const [phone, setPhone] = useState("999-999-9999");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="employee">
      <h1>Enter Patient Information </h1>
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
        <label>Sex:</label>
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </form>
      <form>
        <label>Patient ID:</label>
        <span>
          <input
            type="text"
            required
            value={patientid}
            onChange={(e) => setPatientid(e.target.value)}
          />
        </span>

        <label>Height:</label>
        <span>
          <input
            type="text"
            required
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </span>
        <label>Weight:</label>
        <span>
          <input
            type="text"
            required
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </span>
        <label>Birth Date:</label>
        <span>
          <input
            type="date"
            required
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
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

export default Patient;
