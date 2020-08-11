import React, { useState } from "react";
import styled from "styled-components";
import NavigationItem from "../../Navbar/navItem.jsx";
import Checkbox from "./checkbox.jsx";
import { Formik } from "formik";
import axios from "axios";
import { useAppContext } from "../../../libs/contextLib.js";
import { createPortal } from "react-dom";

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
`;
const ErrorText = styled.p`
  font-size: 16pt;
  color: #ff0000;
  font-weight: 300;
  margin: 0px;
`;
const AltLink = styled(NavigationItem)`
  text-decoration: underline;
  padding: 0px;
  margin-left: 0;
`;
const BottomFormDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 500px;
  judtify-content: space-between;
`;

const validateInput = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "Please enter your username";
    console.log(errors);
  } else {
    errors.username = undefined;
  }

  // VALIDATION OF PASSWORD
  if (!values.password) {
    errors.password = "A password is required";
    console.log(errors);
  } else {
    errors.password = undefined;
  }

  if (errors.username === undefined && errors.password === undefined) {
    errors = false;
  }
  return errors;
};

const apiUrl = "https://foodprint-prod.herokuapp.com/api";

export default function LoginForm() {
  const { logInFunc, loadUserAvatar } = useAppContext();

  const handleSubmit = async (values) => {
    let loginInfo = new FormData();
    loginInfo.set("username", values.username);
    loginInfo.set("password", values.password);

    // Make call for our user profile information, as well as their foodprint
    axios
      .all([
        // After making initial call, ensure token is stored PRIOR to being used in the second API call
        axios.post(`${apiUrl}/users/login`, loginInfo).then((response) => {
          let token = response.data;
          localStorage.setItem("jwtToken", token);
          console.log(response);
        }),
        axios.get(`${apiUrl}/users/foodprint`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }),
      ])
      .then(
        axios.spread((firstResponse, secondResponse) => {
          console.log(secondResponse);

          let userFoodprint = secondResponse;
          let numPics = 0;
          let numFavourites = 0;

          // Determine the number of pictures + number of favourites
          for (
            let placeIdx = 0;
            placeIdx < userFoodprint["data"]["foodprint"].length;
            placeIdx++
          ) {
            numPics +=
              userFoodprint["data"]["foodprint"][placeIdx]["photos"].length;

            for (
              let photoNum = 0;
              photoNum <
              userFoodprint["data"]["foodprint"][placeIdx]["photos"].length;
              photoNum++
            ) {
              if (
                userFoodprint["data"]["foodprint"][placeIdx]["photos"][
                  photoNum
                ]["favourite"] == true
              ) {
                numFavourites += 1;
              }
            }
          }

          let base64Url = localStorage.getItem("jwtToken").split(".")[1];
          let decodedToken = JSON.parse(window.atob(base64Url));
          logInFunc(
            values.username,
            numPics,
            userFoodprint["data"]["foodprint"].length,
            numFavourites
          );
          loadUserAvatar(decodedToken["avatar_url"]);
        })
      )

      .catch(function (error) {
        console.log(error);
      });
  };

  // Checkbox state
  const [checked, setChecked] = useState(false);

  return (
    <div className="loginContainer">
      <Formik
        // Setup initial values
        initialValues={{ username: "", password: "" }}
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
            <BottomFormDiv>
              <label>
                <Checkbox
                  checked={checked}
                  onChange={(event) =>
                    setChecked(
                      { checked: event.target.checked },
                      console.log(checked)
                    )
                  }
                />
                <span>Remember Me</span>
              </label>

              <AltLink
                className="forgotPass"
                label="Forgot Password?"
              ></AltLink>
            </BottomFormDiv>

            <StyledButton type="submit" disabled={isSubmitting}>
              Login
            </StyledButton>
            <StyledText>Don't have an account?</StyledText>
            <AltLink className="register" label="Sign Up"></AltLink>
          </StyledForm>
        )}
      />
    </div>
  );
}
