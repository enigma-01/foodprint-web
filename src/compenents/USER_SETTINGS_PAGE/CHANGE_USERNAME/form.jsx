import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Formik } from "formik";

// The Input Form & Submit Buttons
const StyledForm = styled.form`
  width: wrap;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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
  margin-bottom: 4px;
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

const ErrorText = styled.p`
  font-size: 10pt;
  color: #ff0000;
  font-weight: 500;
  margin-bottom: 12px;
  margin-left: 10px;
  margin-top: 0px;
`;

const LabelText = styled.p`
  color: #636363;
  font-size: 15pt;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const validateInput = (values) => {
  let errors = {};

  if (!values.newUsername) {
    errors.newUsername = "Please enter a username";
  } else {
    errors.newUsername = undefined;
  }

  if (
    errors.newUsername === undefined) {
    errors = false;
  }
  return errors;
};

const ChangeUsernameForm = () => {
  const handleSubmit = async (values) => {
    axios
      .post(`https://foodprint-prod.herokuapp.com/api/users/change/username`, {
        id: localStorage.getItem("userId"),
        new_username: values.newUsername
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div
      className="changeUsernameContainer"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Formik
        // Setup initial values
        initialValues={{ newUsername: ""}}
        // Submission handler
        onSubmit={handleSubmit}
        validate={validateInput}
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
            <LabelText>New Username</LabelText>
            <StyledInput
              type="text"
              name="newUsername"
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newUsername}
            />
            <label style={{ height: "28px" }}>
              {touched.newUsername && errors.newUsername && (
                <ErrorText>{errors.newUsername}</ErrorText>
              )}
            </label>

            <div
              style={{
                width: "515px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StyledButton type="submit" disabled={isSubmitting}>
                Save Changes
              </StyledButton>
            </div>
          </StyledForm>
        )}
      />
    </div>
  );
};

export default ChangeUsernameForm;
