import React from "react";
import CountUp from "react-countup";
import "./counter.css";
export default function Counter({ number, title }) {
  return (
    <div className="number">
      <CountUp duration={30} className="counter" end={number} />
      <span>{title}</span>
    </div>
  );
}
