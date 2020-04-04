import React from "react";
import NavBar from "../Navbar/index";
import FormDiv from "../Form/index";
import './index.css'
import Background from "../../images/Background.png";
 
import { Formik } from "formik";


//import { BrowserRouter } from "react-router-dom";

function App() {
  return (
        <div className = "App" style={{ 
          backgroundImage:`url(${Background})`, 
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPositionY:"103px",
          height:"wrap-content",
        }}>

            <NavBar />
            <FormDiv />
        </div>
  );
}

export default App;
