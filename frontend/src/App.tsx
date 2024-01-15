import "./App.css";
import CreateTagComponent from "./Tag/CreateTagComponent";
import ViewQuestionsComponent from "./question/ViewQuestionsComponent";

function App() {
  return (
    <>
      <h1>Home Screen</h1>
      <ViewQuestionsComponent />
      <br />
      <br />
      <br />
      <br />
      <CreateTagComponent />
    </> // Create dropdown for CreateTagComponent
  );
}

export default App;
