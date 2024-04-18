import logo from "./logo.svg";
import "./App.css";
import { useBoundStore } from "./store/useBoundStore.tsx";

function App() {
  const test1 = useBoundStore((state) => state.test1);
  const test2 = useBoundStore((state) => state.test2);
  const update1 = useBoundStore((state) => state.updateTest1);
  const update2 = useBoundStore((state) => state.updateTest2);
  const reset1 = useBoundStore((state) => state.resetTest1);
  const reset2 = useBoundStore((state) => state.resetTest2);
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
      <button onClick={() => update1("test1")}>UPDATE1</button>
      <button onClick={() => update2("test2")}>UPDATE2</button>
      <button onClick={reset1}>RESET1</button>
      <button onClick={reset2}>RESET2</button>
    </div>
  );
}

export default App;
