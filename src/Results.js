import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    console.log(props);
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <div className="Phonetic">
            <span className="text">
              {props.results.phonetic}
            </span>
            <br />
          </div>        
        </section>        
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}