import React from "react";
import styled from "styled-components";
import NavigationItem from "../Navbar/navItem";
import { Formik } from "formik";
import axios from "axios";
import { useAppContext } from "../../libs/contextLib";
import { NavLink } from "react-router-dom"


// The Input Form & Submit Buttons
const StyledForm = styled.form`
  width: 690px;
  display: flex;
  flex-direction: column;
  align-items: center;

  :focus {
    outline: none;
  }

  label {
    min-height: 26px;
  }
`;
const StyledInput = styled.input`
  width: 489px;
  height: 40px;
  border: 2px solid #f6b26b;
  border-radius: 30px;
  margin-bottom: 16px;
  padding-left: 20px;
  font-size: 30px;
  text-color: #f6b26b;

  &::placeholder {
    color: #b0b0b0;
    line-height: 30px;
    font-weight: 300;
    font-size: 30px;
    padding-top: 20px;
  }

  :focus {
    outline: none;
  }
`;
const StyledButton = styled.button`
  width: 305px;
  height: 62px;
  background-color: #f6b26b;
  color: #fff;
  border-radius: 31px;
  border-color: #f6b26b;
  font-size: 25px;
  font-weight: 700;
  margin-top: 52px;

  :hover {
    background-color: #f6a56b;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  :focus {
    outline-color: #fbc575;
  }
`;
const StyledText = styled.p`
  font-size: 20px;
  color: #636363;
  font-weight: 500;
  margin: 64px 0px 5px 0px;

  &.TOS{
    font-size:12px;
    margin-top:10px;
  }

  &.TOS-Link{
    font-size:12px;
    margin-top:0px;
    color: #fbc575
  }`;
const ErrorText = styled.p`
  font-size: 16pt;
  color: #ff0000;
  font-weight: 300;
  margin: 0px;
`;
const AltSignIn = styled(NavigationItem)`
  font-weight: 700;
  padding-left: none;
  margin-left: 0;
`;

const apiUrl = "https://foodprint-prod.herokuapp.com/api";

export default function FinalForm() {
  // This function receives values from the form, and acts as our form submission handler

  const { logInFunc } = useAppContext();

  const handleSubmit = async (values) => {
    let userInfo = new FormData();
    userInfo.set("username", values.username);
    userInfo.set("password", values.password);
    console.log(userInfo);

    axios
      .post(`${apiUrl}/users/register`, userInfo)
      .then((response) => {
        console.log(response.data);
        let token = response.data;

        localStorage.setItem("jwtToken", token);
        logInFunc(values.username);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <Formik
        // Setup initial values
        initialValues={{ username: "", password: "" }}
        // Submission handler
        onSubmit={handleSubmit}
        //Validation of form
        validate={(values) => {
          let errors = {};

          if (!values.username) {
            errors.username = "Username is required";
            console.log(errors);
          } else {
            errors.username = undefined;
          }

          // VALIDATION OF PASSWORD
          if (!values.password) {
            errors.password = "A password is required";
            console.log(errors);
          } else if (values.password.length < 6) {
            errors.password = "Password must be 6 characters";
            console.log(errors);
          } else {
            errors.password = undefined;
          }

          if (errors.username === undefined && errors.password === undefined) {
            errors = false;
          }
          return errors;
        }}
        render={({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <label>
              {touched.username && errors.username && (
                <ErrorText>{errors.username}</ErrorText>
              )}
            </label>
            <StyledInput
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />

            <label>
              {touched.password && errors.password && (
                <ErrorText>{errors.password}</ErrorText>
              )}
            </label>
            <StyledInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              border={touched.password && errors.password && "2px solid red"}
            />
            <StyledButton type="submit" disabled={isSubmitting}>
              Create Account
            </StyledButton>
            <StyledText className="TOS">By registering, you agree to our {
              <NavLink to="/about">
                <StyledText className="TOS-Link">Terms</StyledText>
              </NavLink>} and Privacy Policy.</StyledText>
            <StyledText>Already have an account?</StyledText>
            <AltSignIn className="login" label="Sign In"></AltSignIn>
          </StyledForm>
        )}
      />
    </div>
  );
}
