import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import Welcome from "./components/Welcome";
import Employee from "./components/Employee";
import Patient from "./components/Patient";
import Appointment from "./components/Appointment";

function App() {
  const adminUser = { name: "Harry Potter", password: "123456" };
  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.name == adminUser.name &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };
  const Logout = () => {
    console.log("Log out");
  };
  return (
    <>
      <div>
        {user.name != "" ? (
          <div>
            <h2>
              {" "}
              <Router>
                <div>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/patient" element={<Patient />} />
                    <Route path="/appointment" element={<Appointment />} />
                  </Routes>
                </div>
              </Router>
            </h2>
          </div>
        ) : (
          <div>
            <LoginForm Login={Login} error={error} />{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
