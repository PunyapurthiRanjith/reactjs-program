import axios from "axios";
import React, { useRef, useState } from "react";

const UncontrolledForm = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [spanValue, setSpanValue] = useState({});
  const [submittedData, setSubmittedData] = useState([]); // Store submitted data

  const submitHandler = (event) => {
    event.preventDefault();
    const usernameEntered = usernameRef.current.value;
    const passwordEntered = passwordRef.current.value;
    const Errors = validations(usernameEntered, passwordEntered);
    if (Object.keys(Errors).length > 0) {
      setSpanValue(Errors);
    } else {
      loginApi(usernameEntered, passwordEntered);
      storeSubmittedData(usernameEntered, passwordEntered); // Store data
    }
  };

  const validations = (usernameValue, passwordValue) => {
    const formErrors = {};

    if (!usernameValue) {
      formErrors.usernameError = "please Enter username";
    } else if (usernameValue.length > 25) {
      formErrors.usernameError =
        "username length should be less than 25 Characters";
    }
    if (!passwordValue) {
      formErrors.passwordError = "please Enter password";
    } else if (passwordValue.length > 20) {
      formErrors.passwordError =
        "password length should be less than 20 characters";
    }
    return formErrors;
  };

  const loginApi = async (usernameVal, passwordVal) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: usernameVal,
        password: passwordVal,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const storeSubmittedData = (username, password) => {
    setSubmittedData((prevData) => [...prevData, { username, password }]);
  };

  return (
    <>
      <h1>Uncontrolled Form with useRef Hook</h1>
      <div style={{ width: "500px" }} className="border m-5 p-3">
        <form onSubmit={submitHandler}>
          <div className="mb-3 mt-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              name="username"
              ref={usernameRef}
            />
            <span style={{ color: "red" }}>{spanValue?.usernameError}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
              ref={passwordRef}
            />
            <span style={{ color: "red" }}>{spanValue?.passwordError}</span>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="border m-5 p-2 text-center" style={{width:"500px"}}>
        <h2>Submitted Data</h2>
        <table className="table table-bordered" style={{ width: "450px" }}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.username}</td>
                <td>{data.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UncontrolledForm;
