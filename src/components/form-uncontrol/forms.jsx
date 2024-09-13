import axios from "axios";
import React, { useRef, useState } from "react";

const UncontrolledForm = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [spanValue,setSpanValue]= useState({})

  const submitHandler = (event) => {
    event.preventDefault();
    const usernameEntered = usernameRef.current.value;
    const passwordEntered = passwordRef.current.value;
    const Errors = validations(usernameEntered, passwordEntered);
    if (Object.keys(Errors).length > 0) {
      setSpanValue(Errors)
    } else {
      loginApi(usernameEntered, passwordEntered);
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

  return (
    <>
      <h1>Hi Dhayyam</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3 mt-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter email"
            name="email"
            ref={usernameRef}
          />
          <span>{spanValue?.usernameError}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pwd"
            ref={passwordRef}
          />
          <span>{spanValue?.passwordError}</span>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default UncontrolledForm;
