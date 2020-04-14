import React from "react";
import NavBar from "../Navbar/index";
import FormDiv from "../Form/index";
import "./index.css";
import Background from "../../images/newBackground.png";

import { Formik } from "formik";

//import { BrowserRouter } from "react-router-dom";

const App = () => (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 10%",
      }}>
      <NavBar />
      <FormDiv />
    </div>
);

export default App;
