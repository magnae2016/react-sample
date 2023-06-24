import "./App.css";
import Parent from "./components/ContainerSample";
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
    </div>
  );
}

export default App;
