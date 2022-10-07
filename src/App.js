import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    switch (name) {
      case "add":
        setResult(result + input);
        break;
      case "subtract":
        setResult(result - input);
        break;
      case "multiply":
        setResult(result * input);
        break;
      case "divide":
        setResult(result / input);
        break;
      case "reset-input":
        setInput(0);
        break;
      case "reset-result":
        setResult(0);
        break;
    }
  };

  const handleChange = (e) => {
    setInput(Number(e.target.value));
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Caluclator</h1>
      </div>
      <form>
        <p>{result}</p>
        <input
          pattern="[0-9]"
          type="number"
          placeholder="Type a number"
          onChange={handleChange}
          value={input}
        />
        <div className="btns">
          <button onClick={handleClick} name="add" className="add-btn">
            Add
          </button>
          <button
            onClick={handleClick}
            name="subtract"
            className="subtract-btn"
          >
            Subtract
          </button>
          <button
            onClick={handleClick}
            name="multiply"
            className="multiply-btn"
          >
            Multiply
          </button>
          <button onClick={handleClick} name="divide" className="divide-btn">
            Divide
          </button>
          <button
            onClick={handleClick}
            name="reset-input"
            className="reset-input-btn"
          >
            Reset Input
          </button>
          <button
            onClick={handleClick}
            name="reset-result"
            className="reset-result-btn"
          >
            Reset Result
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
