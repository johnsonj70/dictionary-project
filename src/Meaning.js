import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms = {props.meaning.synomyms} />
    <div/>
            <div className="definition">
              {props.meaning.definition}
            </div>
            <div className="example">
              {props.meaning.example}
            </div>
          </div>
        );
}