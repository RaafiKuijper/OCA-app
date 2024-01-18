package nl.itvitae.ocaapp.quiz;

import java.util.List;
import lombok.RequiredArgsConstructor;
import nl.itvitae.ocaapp.question.QuestionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuizService {

  private final QuizRepository quizRepository;
  private final QuestionService questionService;


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
}
