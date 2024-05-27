import logo from "./logo.svg";
import "./App.css";
import { useStore } from "./store/useStore.tsx";

function App() {
  const test1 = useStore((state) => state.test1State.test1);
  const test2 = useStore((state) => state.test2State.test2);
  const updateTest1 = useStore((state) => state.test1State.updateTest1);
  const updateTest2 = useStore((state) => state.test2State.updateTest2);
  const resetTest1 = useStore((state) => state.test1State.resetTest1);
  const reset2 = useStore((state) => state.test2State.resetTest2);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>value1: {test1}</h1>
      <h1>value2: {test2}</h1>
      <button onClick={() => updateTest1("test1")}>UPDATE1</button>
      <button onClick={() => updateTest2("test2")}>UPDATE2</button>
      <button onClick={resetTest1}>RESET1</button>
      <button onClick={reset2}>RESET2</button>
    </div>
  );
}

export default App;
