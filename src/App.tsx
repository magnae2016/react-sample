import "./App.css";
import Parent from "./components/useCallbackSample";
import Page from "./components/ContextSample";
import Message from "./components/Message";
import Name from "./components/Name";
import Hello from "./components/hello";
import Counter from "./components/useReducerSample";
import UseMemoSample from "./components/UseMemoSample";

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
    </div>
  );
}

export default App;
