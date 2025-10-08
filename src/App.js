import './App.css';
import Dictionary from "./Dictionary";
import logo from "./image/logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
            <Dictionary />
        </main>
        <footer className="App-footer">
          <p>
            This is a React.js Project coded by <a href="https://github.com/johnsonj70" target="blank" rel="noreferrer">Janice Johnson,</a>{" "}
            is open-sourced on{" "}
            <a href="https://github.com/johnsonj70/dictionary-project" target="blank" rel="noreferrer">GitHub</a>{" "} and hosted on{" "}
            <a href="https://jj-dictionary-project.netlify.app/" target="_blank" rel="noreferrer">Netlify</a> 
          </p>
        </footer>
      </div>
    </div>
  );
}

