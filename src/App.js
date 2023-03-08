import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/session2.js/counter";

function App() {
  return (
    <div className="App">
      <Counter diff={1} />
      <Counter diff={10} />
    </div>
  );
}

export default App;
