import React from "react";
import styled from "styled-components";
import NavigationItem from "../Navbar/navItem";
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

  text{
    color: #FF0000;
  }

  label{
    min-height: 20px;
  }
`;
const StyledInput = styled.input`
  width: 489px;
  height: 40px;
  border: 2px solid #f6b26b;
  border-radius: 30px;
  margin-bottom: 22px;
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
const AltSignIn = styled(NavigationItem)`
  text-decoration: underline;
  padding-left: none;
  margin-left: 0;
`;

const FinalForm = () => (
    <div className="container">

      <Formik

        initialValues = {{ username: "", email: "", password: ""}}

        validate={values => {
          let errors = {};
          // REGEX (This doesn't work as intended ATM)
           let regex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
          
          if (!values.username) {
            errors.username = "Username is required";
          }
          
          // VALIDATION OF EMAIL
          if (!values.email) {
            errors.email = "Email is required";
          } else if (!regex.test(values.email)) {
            errors.email = "Invalid email address";
          }
            else{
              errors.email ="";
          }
          // VALIDATION OF PASSWORD
          if (!values.password) {
            errors.password = "A password is required";
          } else if (values.password.length < 6) {
            errors.password = "Password must be 6 characters";
          }
          return errors;
        }}
      
        onSubmit={values => {
          console.log(values);
        }}

        render={({touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (

        <StyledForm onSubmit = {handleSubmit}>
          <label>
            {touched.username && errors.username && <text>{errors.username}</text>}
          </label>
            <StyledInput 
              type="text" 
              name="username" 
              placeholder="Username" 
              onChange = {handleChange}
              onBlur = {handleBlur}
              value = {values.username}
            />

          <label>
            {touched.email && errors.email && <text>{errors.email}</text>}
          </label>
            <StyledInput 
              type="text" 
              name="email" 
              placeholder="Email" 
              onChange = {handleChange}
              onBlur = {handleBlur}
              value = {values.email}
              border = {touched.email && errors.email && "2px solid red"}
            />

          <label> 
            {touched.password && errors.password && <text>{errors.password}</text>}
          </label>
            <StyledInput 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange = {handleChange}
              onBlur = {handleBlur}
              value = {values.password}
              border = {touched.password && errors.password && "2px solid red"}
            />
            <StyledButton type="submit">Create Account</StyledButton>
            <StyledText>Already have an account?</StyledText>
            <AltSignIn className = "sign-in" label="Sign In"></AltSignIn>
          </StyledForm>
        )}  
      />
        
    </div>
);

export default FinalForm;
