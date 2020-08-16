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

const TitleText = styled.p`
  color: #636363;
  font-size: 15pt;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom:10px;
`;

const validateInput = (values) => {
  let errors = {};

  if (!values.oldPass) {
    errors.oldPass = "Please enter your old password";
  } else if (values.oldPass.length < 6) {
    errors.oldPass = "Old password is too short";
  } else {
    errors.oldPass = undefined;
  }

  if (!values.newPass) {
    errors.newPass = "A new password is required";
    console.log(errors);
  } else if (values.newPass.length < 6) {
    errors.newPass = "New password must be at least 6 characters";
    console.log(errors);
  } else {
    errors.newPass = undefined;
  }

  if (!values.newPassConfirm) {
    errors.newPassConfirm = "Must confirm your new password";
    console.log(errors);
  } else if (values.newPassConfirm.length < 6) {
    errors.newPassConfirm = "New password must be at least 6 characters";
    console.log(errors);
  } else if (values.newPassConfirm !== values.newPass) {
    errors.newPassConfirm = "Passwords do not match";
    console.log(errors);
  } else {
    errors.newPassConfirm = undefined;
  }

  if (
    errors.oldPass === undefined &&
    errors.newPass === undefined &&
    errors.newPassConfirm === undefined
  ) {
    errors = false;
  }
  return errors;
};

const ChangePasswordPage = () => {
  const handleSubmit = async (values) => {
    axios
      .post(`https://foodprint-prod.herokuapp.com/api/users/change/password`, {
        id: localStorage.getItem("userId"),
        old_password: values.oldPass,
        new_password: values.newPass,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div
      className="loginContainer"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Formik
        // Setup initial values
        initialValues={{ oldPass: "", newPass: "", newPassConfirm: "" }}
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
            <TitleText>Old Password</TitleText>
            <StyledInput
              type="password"
              name="oldPass"
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.oldPass}
            />
            <label style={{ height: "28px" }}>
              {touched.oldPass && errors.oldPass && (
                <ErrorText>{errors.oldPass}</ErrorText>
              )}
            </label>

            <TitleText>New Password</TitleText>
            <StyledInput
              type="password"
              name="newPass"
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newPass}
              border={touched.newPass && errors.newPass && "2px solid red"}
            />
            <label style={{ height: "28px" }}>
              {touched.newPass && errors.newPass && (
                <ErrorText>{errors.newPass}</ErrorText>
              )}
            </label>
            <TitleText>Confirm New Password</TitleText>
            <StyledInput
              type="password"
              name="newPassConfirm"
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newPassConfirm}
              border={
                touched.newPassConfirm &&
                errors.newPassConfirm &&
                "2px solid red"
              }
            />
            <label style={{ height: "28px" }}>
              {touched.newPassConfirm && errors.newPassConfirm && (
                <ErrorText>{errors.newPassConfirm}</ErrorText>
              )}
            </label>
            <div style={{ width:"515px", display: "flex", justifyContent: "center" }}>
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

export default ChangePasswordPage;
