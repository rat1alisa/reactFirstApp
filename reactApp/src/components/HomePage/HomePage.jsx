import { func } from "prop-types";
import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
import Button from "../common/Button/Button";
import Form from "../common/MyForm/MyForm";


function Home() {
    return(
        <div className="card">
  <div className="container">
    <div className="cloud front">
      <span className="left-front"></span>
      <span className="right-front"></span>
    </div>
    <span className="sun sunshine"></span>
    <span className="sun"></span>
    <div className="cloud back">
      <span className="left-back"></span>
      <span className="right-back"></span>
    </div>
  </div>

  <div className="card-header">
    <span>Messadine, Susah Tunisia</span>
    <span>March 13</span>
  </div>

  <span className="temp">23°</span>

  <div className="temp-scale">
    <span>Celcius</span>
  </div>
</div>
    )
}

export default Home;
