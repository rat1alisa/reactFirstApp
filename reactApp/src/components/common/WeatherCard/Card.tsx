import React, { useState } from "react";
import { useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./Card.css";

interface CardProps {
  country: string;
  date: string;
  tempr: string;
}

const Card = ({country, date, tempr}: CardProps) => {

    return (
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
    <span>{country}</span>
    <span>{date}</span>
  </div>

  <span className="temp">{tempr}°</span>
</div>
     
    )
};


export default Card;