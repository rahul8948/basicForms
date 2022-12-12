import { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [tnc, settnc] = useState(false);
  const [interest, setinterest] = useState("");

  function getFormData(e) {
    e.preventDefault();
  }
  return (
    <>
      <h1>Handle Forms in Reactjs</h1>
      <form onSubmit={getFormData}>
        <input type="type" placeholder="enter your name" /> <br /> <br />
        <select>
          <option>Select Option</option>
          <option>Marvel</option>
          <option>DC</option>
          <option>Averger</option>
        </select>{" "}
        <br /> <br />
        <input type="checkbox" /> <span>Terms and condition apply </span>
        <br /> <br />
        <button onClick="submit"> Submit </button>
      </form>
    </>
  );
}
export default App;
