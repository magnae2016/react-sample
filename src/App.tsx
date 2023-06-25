import "./App.css";
import Clock from "./components/Clock";
import Page from "./components/ContextSample";
import Message from "./components/Message";
import Name from "./components/Name";
import UseMemoSample from "./components/UseMemoSample";
import Hello from "./components/hello";
import Parent from "./components/useContext";
import Counter from "./components/useReducerSample";

function App() {
  return (
    <div className="App">
      <Hello />
      <Name />
      <Message />
      <Page />
      <Counter initialValue={0} />
      <Parent />
      <UseMemoSample />
      <Clock />
    </div>
  );
}

export default App;
