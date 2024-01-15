import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnswerQuestionView from "./answer-question/AnswerQuestionView.tsx";
import CreateQuestionsFormComponent from "./question/CreateQuestionFormComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/answer-question/:id" element={<AnswerQuestionView />} />
        <Route path="/create-question" element={<CreateQuestionsFormComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
