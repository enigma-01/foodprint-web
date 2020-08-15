import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Formik } from "formik";

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

const ErrorText = styled.p`
  font-size: 16pt;
  color: #ff0000;
  font-weight: 300;
  margin: 0px;
`;

const validateInput = (values) => {
  let errors = {};
  if (!values.oldPass) {
    errors.oldPass = "Please enter your old password";
  } else {
    errors.oldPass = undefined;
  }

  // VALIDATION OF PASSWORD
  if (!values.newPass) {
    errors.newPass = "A new password is required";
  } else {
    errors.newPass = undefined;
  }

  if (errors.oldPass === undefined && errors.newPass === undefined) {
    errors = false;
  }
  return errors;
};

const ChangePasswordPage = () => {
  const handleSubmit = async (values) => {
    let passwordInfo = new FormData();
    passwordInfo.set("old_password", values.oldPass);
    passwordInfo.set("new_password", values.newPass);

    console.log(passwordInfo);

    axios
      .post(
        `https://foodprint-prod.herokuapp.com/api/users/change/password`, {
          "id":localStorage.getItem("userId"),
          "old_password": values.oldPass,
          "new_password": values.newPass
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="loginContainer" id="bob">
      <Formik
        // Setup initial values
        initialValues={{ oldPass: "", newPass: "" }}
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
            <label>
              {touched.oldPass && errors.oldPass && (
                <ErrorText>{errors.oldPass}</ErrorText>
              )}
            </label>
            <StyledInput
              type="password"
              name="oldPass"
              placeholder="Old Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.oldPass}
            />

            <label>
              {touched.newPass && errors.newPass && (
                <ErrorText>{errors.newPass}</ErrorText>
              )}
            </label>
            <StyledInput
              type="password"
              name="newPass"
              placeholder="New Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newPass}
              border={touched.newPass && errors.newPass && "2px solid red"}
            />

            <StyledButton type="submit" disabled={isSubmitting}>
              Change Password
            </StyledButton>
          </StyledForm>
        )}
      />
    </div>
  );
};

export default ChangePasswordPage;