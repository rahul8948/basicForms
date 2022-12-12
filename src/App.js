import React, { useState } from "react";
import "./styles.css";

function App() {
  const [status, setStatus] = React.useState(true);
  return (
    <div className="App">
      {status ? <h1>Hello Rahul</h1> : null}

      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>show</button>

      <button onClick={() => setStatus(!status)}>toggle</button>
    </div>
  );
}
export default App;
