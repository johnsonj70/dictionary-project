import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (   
         <ul className="Synonyms">
            {props.synonyms.map(function (synonym, index) {
                return <span><li key={index}>{synonym}</li></span>;
            })}
        </ul>
    );
  } else {
    return null;
  }
}