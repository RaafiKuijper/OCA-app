import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnswerQuestionView from "./answer-question/AnswerQuestionView.tsx";
import CreateQuizView from "./create-quiz/CreateQuizView.tsx";
import MakeQuizView from "./make-quiz/MakeQuizView.tsx";
import CreateQuestionsFormComponent from "./question/CreateQuestionFormComponent.tsx";
import CreateTagComponent from "./tag/CreateTagComponent.tsx";
import isAdmin from "./user/user.tsx";
import MyNavbar from "./navbar/MyNavbar.tsx";
import ViewQuestionsComponent from "./question/ViewQuestionsComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyNavbar />
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        {!isAdmin ? (
          <>
            <Route
              path="/answer-question/:id"
              element={<AnswerQuestionView />}
            />
            <Route
              path="/make-quiz/:quizId/:id"
              element={<AnswerQuestionView />}
            />
            <Route path="/make-quiz/:id" element={<MakeQuizView />} />
            <Route path="/create-quiz" element={<CreateQuizView />} />
          </>
        ) : (
          <>
            <Route
              path="/create-question"
              element={<CreateQuestionsFormComponent />}
            />
            <Route path="/create-tag" element={<CreateTagComponent />} />
            <Route path="/view-questions" element={<ViewQuestionsComponent />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
