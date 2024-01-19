package nl.itvitae.ocaapp.quiz;

import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import nl.itvitae.ocaapp.answer.Answer;
import nl.itvitae.ocaapp.answer.AnswerBody;
import nl.itvitae.ocaapp.answer.AnswerResult;
import nl.itvitae.ocaapp.answer.AnswerService;
import nl.itvitae.ocaapp.question.Question;
import nl.itvitae.ocaapp.question.QuestionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuizService {

  private final QuizRepository quizRepository;
  private final QuestionService questionService;
  private final AnswerService answerService;


  public Quiz createQuiz(int questionCount) {
    return quizRepository.save(new Quiz(questionService.getRandomQuestions(questionCount)));
  }

  public QuizResponse getQuizById(long id) {
    if (quizRepository.findById(id).isEmpty()) {
      return null;
    }

    final Quiz quiz = quizRepository.findById(id).get();
    final List<QuizQuestion> questions = quiz.getQuestions().stream()
        .map(question -> new QuizQuestion(question.getId(), question.getText()))
        .toList();
    final long qid = quiz.getId();

    return new QuizResponse(qid, questions);
  }

  public Long getNextQuestion(long id) {
    if (quizRepository.findById(id).isEmpty()) {
      return null;
    }

    final Quiz quiz = quizRepository.findById(id).get();
    final int currentAnswer = quiz.getAnswers().size();

    if (currentAnswer >= quiz.getQuestions().size()) {
      return -1L;
    }

    final Question currentQuestion = quiz.getQuestions().get(currentAnswer);

    return currentQuestion.getId();
  }

  public AnswerResult submitAnswer(long id, AnswerBody answerBody) {
    if (quizRepository.findById(id).isEmpty()) {
      return null;
    }

    final Quiz quiz = quizRepository.findById(id).get();
    final Answer answer = answerService.createAnswer(answerBody, quiz.getId());

    if (answer == null) {
      return null;
    }

    final List<Answer> answers = new ArrayList<>(quiz.getAnswers());
    answers.add(answer);
    quiz.setAnswers(answers);
    quizRepository.save(quiz);
    return new AnswerResult(answer.isPassed(), answer.getQuestion().getExplanation());
  }
}
