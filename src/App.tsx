import "./App.css";
import Parent from "./components/ContainerSample";
import Page from "./components/ContextSample";
import Message from "./components/Message";
import Name from "./components/Name";
import Hello from "./components/hello";

function App() {
  return (
    <div className="App">
      <Hello />
      <Name />
      <Message />
      <Parent />
      <Page />
    </div>
  );
}

export default App;
