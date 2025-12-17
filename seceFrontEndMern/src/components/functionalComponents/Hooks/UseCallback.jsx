import { useState, useCallback } from "react";

const UseCallback = () => {
  const [theme, toggleTheme] = useState(false);
  const [number, setNumber] = useState("");

  const styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "20px"
  };

  // Generate multiples using useCallback
  const getMultiples = useCallback(() => {
    return number
      .toString()
      .split("")
      .map((digit, index) => {
        const n = Number(digit);
        if (n === 0) return null;

        return (
          <li key={index}>
            Multiple of {n} : {n * 1}, {n * 2}, {n * 3}
          </li>
        );
      });
  }, [number]);

  return (
    <div style={styling}>
      <h2>useCallback Hook Example</h2>

      <button onClick={() => toggleTheme(!theme)}>Toggle Theme</button>

      <br /><br />

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <p>The number is: {number}</p>

      <ul>
        {number && getMultiples()}
      </ul>
    </div>
  );
};

export default UseCallback;