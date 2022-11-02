import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleMap from "./GoogleMap";

const Form = (props) => {
  const [submit, setSubmit] = useState(false);

  const [inputData, setInputData] = useState({
    firstname: "",
    totalusers: "",
    loginsfailed: "",
    totalgroups: "",
    activeusers: "",
    location: "",
  });

  
  const InputHandle = async (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form id="form" method="GET">
        <div className="inputs">
          <label for="firstname"> First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={InputHandle}
          ></input>
        </div>

        <div className="inputs">
          <label for="totalusers">Total Number Of Users</label>
          <input
            type="text"
            id="totalusers"
            name="totalusers"
            onChange={InputHandle}
          ></input>
        </div>

        <div className="inputs">
          <label for="loginsfailed">Number of Failed Logins</label>
          <input
            type="text"
            id="loginsfailed"
            name="loginsfailed"
            onChange={InputHandle}
          ></input>
        </div>

        <div className="inputs">
          <label for="totalgroups">Total Number of Groups</label>
          <input
            type="text"
            id="totalgroups"
            name="totalgroups"
            onChange={InputHandle}
          ></input>
        </div>

        <div className="inputs">
          <label for="activeusers">Total Number of Active Users</label>
          <input
            type="text"
            id="activeusers"
            name="activeusers"
            onChange={InputHandle}
          ></input>
        </div>

        <div className="inputs">
          <label for="location">User accessing application from</label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={InputHandle}
          ></input>
</div>
<div>
          <Link to="/dashboard">
            <button
              type="submit"
              className="btn"
              onClick={() => {
                props.getData(inputData);
              }}
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Form;
