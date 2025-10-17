import React, { useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";
import "./Dictionary.css";

//Set initial states
export default function Dictionary(props) {
    let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    //Set word state
    function handleDictionaryResponse(response) {
        //This line differs from Matt's code
        setResults(response.data[0]);
    }
    //Set photos state

    function handlePhotoResponse (response) {
        setPhotos(response.data.photos);
    }

    //API call for word and associated images
    function search () {
        // documentation: https://dictionaryapi.dev/e
        let apiKey = "00a6bfb9b6053b4664t55oaa8c181e51";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "Z366ZOvxylv2gTO77Fw2kyBHYaZW1JwBO1t84xnOq1gPLaXhlJ8qkjES";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
        let headers = { Authorization: `${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePhotoResponse);
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
                    <h1>Dictionary Search</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeyWordChange} defaultValue={props.defaultKeyWord}/>
                    </form>
                    <div className="hint">
                        suggested words: "sunset", "wine", "yoga", "dance", etc
                    </div>
                </section>
                <Results results={results}/>
                <Photos photos={photos} />
            </div>
        );
    }
    else {
        load();
        return  "loading..";
    }
}