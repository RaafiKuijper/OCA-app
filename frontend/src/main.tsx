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
import { Navbar } from "react-bootstrap";
import AdminNavLinks from "./navbar/admin-nav-links/AdminNavLinks.tsx";
import UserNavLinks from "./navbar/user-nav-links/UserNavLinks.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar bg="dark" data-bs-theme="dark">
      {isAdmin ? <AdminNavLinks /> : <UserNavLinks />}
    </Navbar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {!isAdmin ? (
          <>
            <Route
              path="/answer-question/:id"
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
          </>
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
