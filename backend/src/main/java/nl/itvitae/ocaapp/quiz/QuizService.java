package nl.itvitae.ocaapp.quiz;

import java.util.Optional;
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

  public Optional<Quiz> getQuizById(long id) {
    return quizRepository.findById(id);
  }
}
