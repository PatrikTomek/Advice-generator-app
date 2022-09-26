import "./App.css";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState([]);
  const [id, setId] = useState([]);

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setQuote(data.slip.advice);
    setId(data.slip.id);
  };

  return (
    <div className="container">
      <div className="app-container">
        <h1 className="advice-id">ADVICE #{id}</h1>
        <p className="quote">"{quote}"</p>
        <div className="pattern-divider"></div>
        <button className="random-advice_btn" onClick={fetchAdvice}></button>
      </div>

      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://patriktomek.cz/" target="_blank">
          Patrik Tomek
        </a>
        .
      </div>
    </div>
  );
}

export default App;
