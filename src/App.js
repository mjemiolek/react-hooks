import React, { useState } from "react";
import './App.css';
import ContextComponent from "./ContextComponent";
import CustomHookComponent from "./CustomHookComponent";
import Fcomponent from "./Fcomponent";
import MemoComponent from "./MemoComponent";
import ReducerComponent from "./ReducerComponent";
import RefComponent from "./RefComponent";

function initialValue() {
  console.log("function called!");
  return 0;
}

function App() {
  const [name, setName] = useState("Dipesh");
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(initialValue());
  const [names, setNames] = useState([]);



  function changeName() {
    console.log("clicked");
    return setFlag(!flag);
  }
  function increment() {
    setSteps((prevState) => prevState + 1);
  }
  function decrement() {
    return setSteps(steps - 1);
  }
  function addNames(e) {
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
    setName("");
  }

  return (
    <div className="App">
      <div>Hello, {flag ? name : ""}</div>
      <button onClick={changeName}>Click me</button>
      <hr></hr>

      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>
      <hr></hr>
      <form onSubmit={addNames}>
        <input type="text" value={name} placeholder="add names" onChange={(e) => setName(e.target.value)} />
        <button>Sumbit</button>
      </form>
      <hr></hr>
      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <hr></hr>
      <Fcomponent />
      <hr></hr>
      <RefComponent />
      <hr></hr>
      <MemoComponent />
      <hr></hr>
      <ContextComponent />
      <hr></hr>
      <ReducerComponent />
      <hr></hr>
      <CustomHookComponent />
    </div>
  );
}

export default App;
