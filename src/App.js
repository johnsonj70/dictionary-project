import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
            <div className="container">
              <Dictionary defaultKeyWord = "sunset" />
            </div>
        </main>
        <footer className="App-footer">
          <p><small>
            This Project was coded by <a href="https://github.com/johnsonj70" target="blank" rel="noreferrer">Janice Johnson,</a>{" "}
            is open-sourced on{" "}
            <a href="https://github.com/johnsonj70/dictionary-project" target="blank" rel="noreferrer">GitHub</a>{" "} and hosted on{" "}
            <a href="https://jj-dictionary-project.netlify.app/" target="_blank" rel="noreferrer">Netlify</a> 
            </small>
          </p>
        </footer>
      </div>
    </div>
  );
}

