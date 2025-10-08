import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyWord, setKeyWord] = useState("");

    function handleResponse(response) {
        console.log(response.data.meanings[0]);
    }

    function search (event) {
        event.preventDefault();

        let apiKey = "00a6bfb9b6053b4664t55oaa8c181e51";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeyWordChange(event) {
        setKeyWord(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyWordChange}/>

            </form>
        </div>
    );
}