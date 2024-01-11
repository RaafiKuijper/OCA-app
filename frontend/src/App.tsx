import "./App.css";
import CreateTagComponent from "./Tag/CreateTagComponent";
import ViewTagComponent from "./Tag/ViewTagComponent";
import ViewQuestionsComponent from "./question/ViewQuestionsComponent";

function App() {
  return (
    <>
      <h1>OCA-app</h1>
      <ViewQuestionsComponent />
      <CreateTagComponent />
      <ViewTagComponent />
    </>
  );
}

export default App;
