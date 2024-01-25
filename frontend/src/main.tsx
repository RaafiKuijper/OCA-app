import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnswerQuestionView from "./answer-question/AnswerQuestionView.tsx";
import CreateQuizView from "./create-quiz/CreateQuizView.tsx";
import MakeQuizView from "./make-quiz/MakeQuizView.tsx";
import CreateQuestionsFormComponent from "./question/CreateQuestionFormComponent.tsx";
import ViewTagComponent from "./tag/ViewTagComponent.tsx";
import isAdmin from "./user/user.tsx";
import MyNavbar from "./navbar/MyNavbar.tsx";
import QuizResults from "./quiz-results/QuizResults.tsx";

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
            <Route path="/quiz-results/:id" element={<QuizResults />} />
            <Route path="/create-quiz" element={<CreateQuizView />} />
          </>
        ) : (
          <>
            <Route
              path="/create-question"
              element={<CreateQuestionsFormComponent />}
            />
            <Route path="/tags" element={<ViewTagComponent />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
