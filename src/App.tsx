import "./App.css";
import Parent from "./components/ContainerSample";
import Page from "./components/ContextSample";
import Message from "./components/Message";
import Name from "./components/Name";
import Hello from "./components/hello";
import Counter from "./components/useReducerSample";

function App() {
  return (
    <div className="App">
      <Hello />
      <Name />
      <Message />
      <Parent />
      <Page />
      <Counter initialValue={0} />
    </div>
  );
}

export default App;
