import "./App.css";
import CreateTagComponent from "./Tag/CreateTagComponent";
import ViewTagComponent from "./Tag/ViewTagComponent";

function App() {
  return (
    <>
      <h1>OCA-app</h1>
      <CreateTagComponent />
      <br />
      <ViewTagComponent />
    </> // Create dropdown for CreateTagComponent
  );
}

export default App;
