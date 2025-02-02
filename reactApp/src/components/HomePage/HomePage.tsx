import { func } from "prop-types";
import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
import Button from "../common/Button/Button";
import Form from "../common/MyForm/MyForm";
import Users from "../Users/Users";
import Card from "../common/WeatherCard/Card";


function Home() {
    return(
      <div className="homePageBlock">
      {/* <Card country={Messadine} date={January} tempr={19} /> */}
      <Users />
      </div>
    )
}

export default Home;
