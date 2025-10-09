import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        //This line differs from Matt's code
        setResults(response.data[0]);
    }

    function search () {
        // documentation: https://dictionaryapi.dev/e
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function handleKeyWordChange(event) {
        setKeyWord(event.target.value);
    }

    function load () {
        setLoaded(true);
        search();
    }
    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeyWordChange} defaultValue={props.defaultKeyWord}/>
                    </form>
                    <div className="hint">
                        suggested words: "sunset", "wine", "yoga", "dance", etc
                    </div>
                </section>
                <Results results={results}/>
            </div>
        );
    }
    else {
        load();
        return  "loading..";
    }
}